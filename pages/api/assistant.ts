import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { question } = req.body;

  // TODO: Integrate with OpenAI API to handle natural language queries.
  // For now, respond with a placeholder.

  res.status(200).json({ answer: `You asked: ${question}. This feature is under development.` });
}
