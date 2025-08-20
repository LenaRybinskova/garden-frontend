import { z } from 'zod';
import {
  commonEmailSchema,
  commonPasswordSchema,
  commonUsernameSchema,
} from '@/common/utils/commonFormRules';

export const signUpSchema = z
  .object({
    login: commonUsernameSchema,
    email: commonEmailSchema,
    password: commonPasswordSchema,
    confirmPassword: z.string(),
    checkBoxTerms: z.boolean().refine((val) => val),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

export type signUpValue = z.infer<typeof signUpSchema>;

export type SignUp = {
  login: string;
  email: string;
  password: string;
};

export type SignIn = Omit<SignUp, 'login'>;
