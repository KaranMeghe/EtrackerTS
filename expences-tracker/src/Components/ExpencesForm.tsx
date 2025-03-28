/** @format */

import { z } from 'zod';
import { Categories } from '../utilities/utilities';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

interface CATEGORIES {
  Categories: string[];
}

const schema = z.object({
  description: z
    .string()
    .min(3, { message: 'Description should be at least 3 charaters' })
    .max(16, { message: 'Description should be maximum 16 charaters' }),
  amount: z.number({ invalid_type_error: 'Amount is required' }).min(0.1).max(1000_00),
  category: z.enum(Categories, {
    errorMap: () => ({
      message: 'Category is required',
    }),
  }),
});

type ExpensesFormData = z.infer<typeof schema>;

const ExpencesForm: React.FC<CATEGORIES> = ({ Categories }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ExpensesFormData>({ resolver: zodResolver(schema) });

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
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
        <select {...register('category')} name='' id='category' className='form-select'>
          <option value=''></option>
          {Categories.map((category) => {
            return (
              <option value={category} key={category}>
                {category}
              </option>
            );
          })}
        </select>
        {errors.category && <p className='text-danger my-1'>{errors.category.message}</p>}
      </div>

      <button className='btn btn-primary'>Submit</button>
    </form>
  );
};

export default ExpencesForm;
