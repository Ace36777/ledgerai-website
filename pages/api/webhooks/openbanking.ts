import type { NextApiRequest, NextApiResponse } from 'next';
import { categorizeTransaction } from '../../../lib/categorizer';
import { generateJournalEntry } from '../../../lib/journal';

/**
 * API route to receive webhook events from the open banking provider.
 * This route expects a POST request containing transaction data. It categorizes
 * the transaction and generates a journal entry using IFRS/GAAP rules. In a
 * production setup, you would verify the webhook signature, persist the
 * transaction, prediction and journal entry to your database and blockchain,
 * and handle errors appropriately.
 */
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end('Method Not Allowed');
  }

  const event = req.body;
  const tx = event.transaction;
  if (!tx) {
    return res.status(400).json({ error: 'Missing transaction data' });
  }

  // Use the rule-based categorizer to predict the category of the transaction
  const prediction = categorizeTransaction(tx);

  // Generate journal entry with double-entry rules
  const journal = generateJournalEntry(tx, prediction.category, prediction.confidence);

  // TODO: Persist transaction, prediction and journal to database and blockchain ledger

  return res.status(200).json({ status: 'received', prediction, journal });
}
