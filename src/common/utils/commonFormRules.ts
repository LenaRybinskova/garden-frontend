import { z } from 'zod';
import { PASSWORD_REGEX, USERNAME_REGEX } from '@/common/config/regex-constants';

//Auth
export const commonUsernameSchema = z
  .string()
  .min(6, 'Username must be at least 6 characters long')
  .max(30, 'Username must not exceed 30 characters')
  .regex(USERNAME_REGEX, 'Username must contain from 6 to 30 characters');

export const commonPasswordSchema = z
  .string()
  .min(6, 'Minimum number of characters 6')
  .max(20, 'Maximum number of characters 20')
  .regex(PASSWORD_REGEX, 'Password must contain letters and symbols');

export const commonEmailSchema = z
  .string()
  .email('The email must match the format example@example.com');
