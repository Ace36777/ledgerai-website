import React from "react";

const Home: React.FC = () => {
  return (
    <main className="container mx-auto p-8">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">LedgerAI</h1>
        <p className="mt-2 text-lg">The Intelligence Layer for Decentralized Finance</p>
      </header>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold">Modules</h2>
        <ol className="list-decimal list-inside mt-2 space-y-2">
          <li>
            <strong>Connect Bank &amp; Wallets:</strong> Securely link business bank accounts (via Open Banking APIs) and connect crypto wallets (ETH, Solana, BTC). Mirror Monzo’s auto‑spreadsheet but send data to a live blockchain ledger.
          </li>
          <li>
            <strong>AI Transaction Categorization:</strong> AI instantly categorizes every transaction using natural language processing and accounting logic.
          </li>
          <li>
            <strong>Auto Journal Posting:</strong> Each transaction becomes an automated journal entry posted to the blockchain ledger. IFRS/GAAP rules are embedded at the model level and transactions carry metadata such as date, category, VAT/tax information and an AI confidence score.
          </li>
          <li>
            <strong>AI Accounting Assistant:</strong> A 24/7 agent accessible by chat or voice that can answer questions (e.g. “What’s my net income this quarter?”), send VAT returns, set reminders (e.g. “Remind me to pay supplier A on Friday”), and email invoices. The agent integrates with Gmail/Outlook and your internal accounting records.
          </li>
          <li>
            <strong>Live Dashboard &amp; Reports:</strong> Real‑time profit/loss, cashflow and reconciliation dashboards, predictive insights (e.g. cash depletion in 6 weeks, unpaid invoices) and downloadable reports compliant with ACCA & IFRS standards.
          </li>
        </ol>
      </section>
    </main>
  );
};

export default Home;
