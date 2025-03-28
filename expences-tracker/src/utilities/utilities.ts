/** @format */

interface ExpencesList {
  id: number;
  description: string;
  category: string;
  amount: number;
}

export const Expences: ExpencesList[] = [
  { id: 1, description: 'Groceries', category: 'Food', amount: 50 },
  { id: 2, description: 'Electricity Bill', category: 'Utilities', amount: 100 },
  { id: 3, description: 'Gym Membership', category: 'Health', amount: 40 },
  { id: 4, description: 'Internet Bill', category: 'Utilities', amount: 60 },
  { id: 5, description: 'Movie Tickets', category: 'Entertainment', amount: 30 },
  { id: 6, description: 'Coffee', category: 'Food', amount: 10 },
  { id: 7, description: 'Car Fuel', category: 'Transportation', amount: 70 },
  { id: 8, description: 'Books', category: 'Education', amount: 45 },
  { id: 9, description: 'Phone Bill', category: 'Utilities', amount: 80 },
  { id: 10, description: 'Dinner', category: 'Food', amount: 90 },
];

export const Categories = ['Food', 'Utilities', 'Health', 'Entertainment', 'Transportation', 'Education'] as const;
