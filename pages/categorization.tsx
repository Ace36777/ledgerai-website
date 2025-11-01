import React from 'react';

export default function Categorization() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">AI Transaction Categorization</h1>
      <p>AI instantly categorizes every transaction using natural language processing and accounting logic.</p>
      <ul className="list-disc pl-5 mt-4">
        <li>Automatic categorization of transactions with NLP + accounting logic</li>
        <li>Examples: Payment from client £28 → Debit Cash (Current Asset), Credit Revenue (Income)</li>
        <li>Examples: Purchase of supplies £100 → Debit Office Supplies (Expense), Credit Cash (Asset)</li>
      </ul>
    </div>
  );
}
