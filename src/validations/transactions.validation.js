import yup from '.';

export const createTransactionSchema = yup.object({
  type: yup.string().oneOf(['INCOME', 'EXPENSE']).required(),
  amount: yup.number().min(0).required(),
  description: yup.string().required(),
  paymentMethod: yup.string().oneOf(['MOBILE MONEY',
    'BANK ACCOUNT',
  'CASH',]).required(),
});
