/** @format */

interface ExpencesList {
  id: string;
  description: string;
  category: string;
  amount: number;
}

export const Expences: ExpencesList[] = [
  { id: 'e1', description: 'Groceries', category: 'Food', amount: 50 },
  { id: 'e2', description: 'Electricity Bill', category: 'Utilities', amount: 100 },
  { id: 'e3', description: 'Gym Membership', category: 'Health', amount: 40 },
  { id: 'e4', description: 'Internet Bill', category: 'Utilities', amount: 60 },
  { id: 'e5', description: 'Movie Tickets', category: 'Entertainment', amount: 30 },
  { id: 'e6', description: 'Coffee', category: 'Food', amount: 10 },
  { id: 'e7', description: 'Car Fuel', category: 'Transportation', amount: 70 },
  { id: 'e8', description: 'Books', category: 'Education', amount: 45 },
  { id: 'e9', description: 'Phone Bill', category: 'Utilities', amount: 80 },
  { id: 'e10', description: 'Dinner', category: 'Food', amount: 90 },
];
