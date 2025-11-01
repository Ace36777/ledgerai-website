import React from 'react';
import Link from 'next/link';

// Split base64 into shorter segments for readability
const logo = "data:image/png;base64," +
  "iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAABqhQtJAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFUklE" +
  "QVR4nO2dz0tUWxzHf2fzCvXSUvAhTmtXqSg+ECn6iljBLxKuRXoVA8pmL+o9jC2w6TjNYU0XSpsHB1hh" +
  "toBOcxKYRiypTDANtAFaWkeWfVCI9NsFRbqjp913e//0zPe+x7/+acfr/fB+jDdVt2/Nm3Djnnd85773" +
  "ufc87Z0u14sWLFyGAyQJwNmQU3lvI5J+49A+OihGmD8f9n4fTvWHA/42HJ/l8z2nP4rZkfevp6RZ+uMm" +
  "G4sC2TxJ9dFFYryonhPq0UPLp7eBuT91Xm1EMNLA9D0R2Lz9Ird7RDEmoxbXS83qzEaTDKDrJ+ZW5hkl" +
  "9drSh4HJ1Es0zsNeNhNn9CoFwavqNzD9nGAcAR7db7KwX5PYdCaUvKe88W6vRqc38zVO7jshUJ4ZP0nu" +
  "kmJTYYcMcqKgO03rBQ13rg2tqRvXN2bRwuB748uSUmU7VptfRplVge+uAs9vvLGt9E6HSRuzFqIrcLLX" +
  "/02T1UQFsrX1yfKwQQt7uRL4/cW8mw0cO0m98pEfyMmXkH+48Lk4fCZ3dzho2scqcvNHeTDfPSydS8nt" +
  "W9ShUe0ndyMb09NbnjwxSdxAI5a6TC8c5EWeBc8HnSM0yaPD9JkMuN38N++n6m4";

const Home: React.FC = () => {
  return (
    <div
      style={{
        background: "linear-gradient(180deg, #000015 0%, #001f3f 50%, #000015 100%)",
        color: "white",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "2rem",
      }}
    >
      <div style={{ maxWidth: "800px", textAlign: "center", marginTop: "4rem" }}>
        <img
          src={logo}
          alt="LedgerAI Logo"
          style={{ width: "120px", height: "120px", margin: "0 auto 1rem" }}
        />
        <h1 style={{ fontSize: "3rem", fontWeight: 700, marginBottom: "1rem" }}>
          LedgerAI
        </h1>
        <p style={{ fontSize: "1.25rem", marginBottom: "2rem" }}>
          The Intelligence Layer for Decentralized Finance
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
            marginBottom: "3rem",
          }}
        >
          <Link href="/connect">
            <a
              style={{
                padding: "0.75rem 1.5rem",
                backgroundColor: "#0066ff",
                color: "white",
                borderRadius: "0.375rem",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Get Started
            </a>
          </Link>
          <Link href="/categorization">
            <a
              style={{
                padding: "0.75rem 1.5rem",
                border: "2px solid #0066ff",
                color: "#0066ff",
                borderRadius: "0.375rem",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Learn More
            </a>
          </Link>
        </div>
      </div>
      <div style={{ maxWidth: "800px" }}>
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: 600,
            marginBottom: "1rem",
            textAlign: "center",
          }}
        >
          Key Modules
        </h2>
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          <li style={{ marginBottom: "1.5rem" }}>
            <h3 style={{ fontSize: "1.25rem", fontWeight: 600 }}>
              Connect Bank & Wallets
            </h3>
            <p>
              Securely link business bank accounts (via Open Banking APIs) and
              connect crypto wallets (ETH, Solana, BTC). LedgerAI mirrors
              Monzo’s auto‑spreadsheet but sends data to a live blockchain ledger.
            </p>
          </li>
          <li style={{ marginBottom: "1.5rem" }}>
            <h3 style={{ fontSize: "1.25rem", fontWeight: 600 }}>
              AI Transaction Categorization
            </h3>
            <p>
              AI instantly categorizes every transaction using natural language
              processing and accounting logic.
            </p>
          </li>
          <li style={{ marginBottom: "1.5rem" }}>
            <h3 style={{ fontSize: "1.25rem", fontWeight: 600 }}>
              Auto Journal Posting
            </h3>
            <p>
              Each transaction becomes an automated journal entry posted to the
              blockchain ledger. IFRS/GAAP rules embedded at the model level.
              Transactions carry metadata: date, category, VAT/tax info, and AI
              confidence score.
            </p>
          </li>
          <li style={{ marginBottom: "1.5rem" }}>
            <h3 style={{ fontSize: "1.25rem", fontWeight: 600 }}>
              AI Accounting Assistant
            </h3>
            <p>
              24/7 agent accessible by chat or voice: ask questions, send VAT
              returns to HMRC, set reminders, and email invoices. Integrates
              with Gmail/Outlook and your internal accounting records.
            </p>
          </li>
          <li style={{ marginBottom: "1.5rem" }}>
            <h3 style={{ fontSize: "1.25rem", fontWeight: 600 }}>
              Live Dashboard & Reports
            </h3>
            <p>
              Real‑time profit/loss, cashflow and reconciliation. Predictive
              insights (e.g., cash depletion in 6 weeks, unpaid invoices).
              Downloadable reports compliant with ACCA & IFRS standards.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
