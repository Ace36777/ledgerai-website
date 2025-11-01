// Simple rule-based transaction categorization. Replace with ML model for production.
export interface Transaction {
  id?: string;
  description: string;
  amount: number;
  merchant?: string;
  date?: string;
}

export interface CategoryPrediction {
  category: string;
  confidence: number;
}

// Define some heuristic rules to map descriptions to categories.
const rules: { pattern: RegExp; category: string }[] = [
  { pattern: /payment from client/i, category: 'Revenue' },
  { pattern: /supplies/i, category: 'Office Supplies' },
  { pattern: /grocery|food/i, category: 'Food' },
  // Add more heuristics as needed
];

// Categorize a transaction using the above rules. Returns a category and confidence score.
export function categorizeTransaction(tx: Transaction): CategoryPrediction {
  for (const rule of rules) {
    if (rule.pattern.test(tx.description)) {
      return { category: rule.category, confidence: 0.8 };
    }
  }
  // Default category if no rule matched
  return { category: 'Uncategorized', confidence: 0.5 };
}
