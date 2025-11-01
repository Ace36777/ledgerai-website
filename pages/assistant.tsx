import React from 'react';

const AssistantPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">AI Accounting Assistant</h1>
      <p className="mb-4">Our AI assistant is available 24/7 via chat or voice to help with accounting tasks.</p>
      <ul className="list-disc list-inside space-y-2">
        <li>Ask questions like "What’s my net income this quarter?"</li>
        <li>Send VAT returns to HMRC or create reminders to pay suppliers.</li>
        <li>Email invoices to clients directly from LedgerAI.</li>
        <li>Integrates with Gmail/Outlook and your accounting records.</li>
      </ul>
    </div>
  );
};

export default AssistantPage;
