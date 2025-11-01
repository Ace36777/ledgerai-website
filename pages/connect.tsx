import React from 'react';

export default function Connect() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Connect Bank &amp; Wallets</h1>
      <p>Securely link your business bank accounts and crypto wallets to LedgerAI. We use regulated Open Banking APIs for banks and popular wallet connectors for Ethereum, Solana, and Bitcoin.</p>
      <ul className="list-disc pl-5 mt-4">
        <li>Connect business bank accounts via regulated Open Banking APIs</li>
        <li>Connect crypto wallets (ETH, Solana, BTC) with wallet connectors</li>
        <li>Mirror Monzo’s auto-spreadsheet but send data to a live blockchain ledger</li>
      </ul>
    </div>
  );
}
