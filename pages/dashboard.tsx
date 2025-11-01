import React from 'react';

const DashboardPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Live Dashboard & Reports</h1>
      <p className="mb-4">Monitor your business performance in real time with charts and insights.</p>
      <ul className="list-disc list-inside space-y-2">
        <li>Real-time profit/loss, cash flow and reconciliation dashboards.</li>
        <li>Predictive insights like cash depletion forecasts and unpaid invoices.</li>
        <li>Downloadable reports that comply with ACCA & IFRS standards.</li>
      </ul>
    </div>
  );
};

export default DashboardPage;
