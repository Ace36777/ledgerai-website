import React from 'react';

export default function Journal() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Auto Journal Posting</h1>
      <p>Each transaction becomes an automated journal entry posted to the blockchain ledger with IFRS/GAAP rules embedded.</p>
      <ul className="list-disc pl-5 mt-4">
        <li>Automated posting of each transaction to the blockchain ledger</li>
        <li>IFRS/GAAP rules embedded at model level</li>
        <li>Transactions carry metadata: date, category, VAT/tax info, and AI confidence score</li>
      </ul>
    </div>
  );
}
