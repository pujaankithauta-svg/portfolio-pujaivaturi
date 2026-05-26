import { createFileRoute } from "@tanstack/react-router";
import Portfolio from "@/components/Portfolio.jsx";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Puja Ankitha Ivaturi , Software Engineer · Data & Agentic AI" },
      {
        name: "description",
        content:
          "Portfolio of Puja Ivaturi , 4+ years building enterprise lakehouses, ETL/migrations, and agentic AI systems across Azure, AWS, GCP, Databricks, and Snowflake.",
      },
      { property: "og:title", content: "Puja Ivaturi , Software Engineer · Data & Agentic AI" },
      {
        property: "og:description",
        content:
          "$25B lakehouse, 5,000+ tables, 30+ projects, 5 AI agents. Data Engineering · Agentic AI · GenAI/RAG.",
      },
    ],
  }),
  component: Portfolio,
});
