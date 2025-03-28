/** @format */

import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

// ✅ Fix: Define Categories as a constant tuple
export const CategoriesTuple = ['Food', 'Utilities', 'Health', 'Entertainment', 'Transportation', 'Education'] as const;

const schema = z.object({
  description: z
    .string()
    .min(3, { message: 'Description should be at least 3 characters' })
    .max(16, { message: 'Description should be maximum 16 characters' }),
  amount: z.number({ invalid_type_error: 'Amount is required' }).min(0.1).max(100000),
  category: z.enum(CategoriesTuple, { errorMap: () => ({ message: 'Category is required' }) }),
});

type ExpensesFormData = z.infer<typeof schema>;

interface ExpencesFormProps {
  Categories: readonly string[];
  onSubmit: (data: ExpensesFormData) => void;
}

const ExpencesForm: React.FC<ExpencesFormProps> = ({ Categories, onSubmit }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ExpensesFormData>({ resolver: zodResolver(schema) });

  return (
    <form
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
        reset();
      })}>
      <div className='mb-3'>
        <label htmlFor='description' className='form-label'>
          Description
        </label>
        <input {...register('description')} id='description' type='text' className='form-control' />
        {errors.description && <p className='text-danger my-1'>{errors.description.message}</p>}
      </div>

      <div className='mb-3'>
        <label htmlFor='amount' className='form-label'>
          Amount
        </label>
        <input {...register('amount', { valueAsNumber: true })} id='amount' type='number' className='form-control' />
        {errors.amount && <p className='text-danger my-1'>{errors.amount.message}</p>}
      </div>

      <div className='mb-3'>
        <label htmlFor='category' className='form-label'>
          Category
        </label>
        <select {...register('category')} id='category' className='form-select'>
          <option value=''>Select Category</option>
          {Categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        {errors.category && <p className='text-danger my-1'>{errors.category.message}</p>}
      </div>

      <button className='btn btn-primary'>Submit</button>
    </form>
  );
};

export default ExpencesForm;
