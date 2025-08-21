import { z } from 'zod';
import { commonEmailSchema, commonPasswordSchema } from '@/common/utils/commonFormRules';

export const signInSchema = z.object({
  email: commonEmailSchema,
  password: commonPasswordSchema,
});

export type signInValue = z.infer<typeof signInSchema>;
