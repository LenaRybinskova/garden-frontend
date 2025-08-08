import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: (string | boolean | undefined)[]) => {
  return twMerge(clsx(inputs.filter(Boolean)));
};
