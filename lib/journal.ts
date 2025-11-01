import { Transaction } from './categorizer';

export interface JournalLine {
  account: string;
  debit: number;
  credit: number;
  description?: string;
}

export interface JournalEntry {
  id?: number;
  transactionId: string;
  lines: JournalLine[];
  date: Date;
  category: string;
  vat?: number;
  confidence: number;
}

// Simple rule definitions to convert transactions into journal entries.
const rules: { match: RegExp; generate: (tx: Transaction) => JournalLine[] }[] = [
  {
    match: /client|payment|revenue/i,
    generate: (tx) => [
      { account: 'Cash', debit: tx.amount, credit: 0 },
      { account: 'Revenue', debit: 0, credit: tx.amount },
    ],
  },
  {
    match: /supplies|office/i,
    generate: (tx) => [
      { account: 'Office Supplies', debit: tx.amount, credit: 0 },
      { account: 'Cash', debit: 0, credit: tx.amount },
    ],
  },
  // Add more rules here for payroll, expenses, etc.
];

/**
 * Generates a journal entry from a transaction, category and confidence score.
 * If no rule matches, falls back to an Uncategorized account.
 */
export function generateJournalEntry(
  tx: Transaction,
  category: string,
  confidence: number
): JournalEntry {
  const rule = rules.find((r) => r.match.test(tx.description));
  const lines = rule
    ? rule.generate(tx)
    : [
        { account: 'Uncategorized', debit: tx.amount, credit: 0 },
        { account: 'Cash', debit: 0, credit: tx.amount },
      ];
  return {
    transactionId: tx.id,
    lines,
    date: new Date(tx.date),
    category,
    confidence,
  };
}
