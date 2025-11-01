import React, { useState } from 'react';

const AssistantPage: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [reply, setReply] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;
    setLoading(true);
    setReply('');
    try {
      const res = await fetch('/api/ledger-ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });
      const data = await res.json();
      setReply(data.reply || 'No response');
    } catch (err) {
      setReply('Error contacting assistant');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">AI Accounting Assistant</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <textarea
          className="w-full border p-2 rounded mb-2 text-black"
          rows={4}
          placeholder="Ask a question about your finances..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
          disabled={loading}
        >
          {loading ? 'Asking...' : 'Ask'}
        </button>
      </form>
      {reply && (
        <div className="bg-gray-100 text-black p-4 rounded">
          <strong>LedgerAI:</strong> {reply}
        </div>
      )}
    </div>
  );
};

export default AssistantPage;
