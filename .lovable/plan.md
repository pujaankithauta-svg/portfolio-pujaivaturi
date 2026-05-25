## Goal
Replace the four-line Situation / Task / Action / Outcome blocks in both resumes with authentic, recruiter-style bullet points. Each bullet stands on its own and folds the metric and use-case directly into the sentence — no S/T/A/O labels.

## Files to change
- `public/resume_data_engineer.html`
- `public/resume_agentic_ai.html`
- `src/components/Portfolio.jsx` (only if any inline STAR markup remains in the Farmer Mac block — keep wording, just change format)

## Format rules
- Render each former STAR block as 2–3 bullets inside the existing `.exp-bullets <ul>`.
- Drop the `.star-block` / `.star-line` / `.lbl` markup entirely; reuse the existing `.exp-bullets` styles (already themed per resume).
- Each bullet pattern: **what I built / led + scope/scale + concrete outcome or metric**. No "Situation:" / "Action:" prefixes.
- Preserve all metrics already present ($25B portfolio, 5,000+ tables, 60–80% runtime cut, 2M+ records, 95% extraction accuracy, 60% doc-time cut, etc.). No new fabricated numbers.
- Keep Farmer Mac (first role) wording and metrics intact — only collapse STAR → bullets.
- Keep the existing sidebar, summary, education, and header untouched.
- Keep each resume to 1–2 pages; bullet form is tighter than STAR, so length will naturally shrink.

## Example transform (Farmer Mac, data resume)
Before: S/T/A/O paragraph block about the $25B lakehouse.
After:
- Architected and own the enterprise Medallion Lakehouse (Landing → Bronze → Silver → Gold) consolidating 42 source databases and 5,000+ tables into a single source of truth for a $25B mortgage portfolio.
- Built layered ingestion patterns (full loads, incremental CDC, SCD Type 2 via Delta MERGE) and modeled conformed Loan / Borrower / Property / Counterparty / Time dimensions, cutting report refresh from 2 weeks to under 5 minutes at 99.9% accuracy.
- Provisioned Dev / Test / UAT / Prod with IaC and RBAC; standardized 200+ business rules into reusable Gold marts.

Same treatment applied to every remaining STAR block in both resumes (Farmer Mac vendor unification, DQ/lineage framework, SAS→PySpark modernization; Aesthetic Record, Ogha, TCS Sanofi; and all Agentic AI roles: Loan Doc Intelligence, LTC onboarding, compliance retrieval, Dictation/SOAP, Clinical RAG chatbot, Interview prep agent, Marketing agent, additional 3 agents, Sanofi pharmacovigilance).

## Out of scope
- No changes to the portfolio page UI, AI chat, publications, or images.
- No content additions beyond reformatting; metrics stay as-is.
