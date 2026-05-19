import "@tanstack/react-start";
import { createFileRoute } from "@tanstack/react-router";

type ChatMessage = { role: "user" | "assistant" | "system"; content: string };
type ChatBody = { system?: string; messages?: ChatMessage[] };

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }: { request: Request }) => {
        const key = process.env.LOVABLE_API_KEY;
        if (!key) {
          return new Response(
            JSON.stringify({ error: "Missing LOVABLE_API_KEY" }),
            { status: 500, headers: { "Content-Type": "application/json" } },
          );
        }

        let body: ChatBody;
        try {
          body = (await request.json()) as ChatBody;
        } catch {
          return new Response(JSON.stringify({ error: "Invalid JSON" }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
          });
        }

        const messages: ChatMessage[] = [];
        if (body.system) messages.push({ role: "system", content: body.system });
        if (Array.isArray(body.messages)) {
          for (const m of body.messages) {
            if (
              m &&
              (m.role === "user" || m.role === "assistant" || m.role === "system") &&
              typeof m.content === "string"
            ) {
              messages.push({ role: m.role, content: m.content });
            }
          }
        }

        try {
          const res = await fetch(
            "https://ai.gateway.lovable.dev/v1/chat/completions",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "Lovable-API-Key": key,
              },
              body: JSON.stringify({
                model: "google/gemini-3-flash-preview",
                messages,
                max_tokens: 800,
              }),
            },
          );

          if (!res.ok) {
            const text = await res.text();
            return new Response(
              JSON.stringify({
                error: `Gateway error ${res.status}`,
                detail: text.slice(0, 500),
              }),
              { status: res.status, headers: { "Content-Type": "application/json" } },
            );
          }

          const data = (await res.json()) as {
            choices?: Array<{ message?: { content?: string } }>;
          };
          const reply = data.choices?.[0]?.message?.content ?? "";
          return new Response(JSON.stringify({ reply }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
          });
        } catch (err) {
          return new Response(
            JSON.stringify({ error: (err as Error).message }),
            { status: 500, headers: { "Content-Type": "application/json" } },
          );
        }
      },
    },
  },
});
