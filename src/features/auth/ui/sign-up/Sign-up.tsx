'use client';

import { Input } from '@/common/components/input';
import { Checkbox } from '@/common/components/checkbox';
import { Button } from '@/common/components/button';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  commonEmailSchema,
  commonPasswordSchema,
  commonUsernameSchema,
} from '@/common/utils/commonFormRules';
import { useRef } from 'react';

const signUpSchema = z
  .object({
    name: commonUsernameSchema,
    email: commonEmailSchema,
    password: commonPasswordSchema,
    confirmPassword: z.string(),
    checkBoxTerms: z.boolean().refine((val) => val),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

type FormValue = z.infer<typeof signUpSchema>;

export const SignUp = () => {
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  const {
    control,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<FormValue>({
    resolver: zodResolver(signUpSchema),
    mode: 'onTouched',
    reValidateMode: 'onSubmit',
    defaultValues: {
      checkBoxTerms: false,
      name: '',
      email: '',
      password: '',
      confirmPassword: 's',
    },
  });

  const focusInput = (index: number) => {
    inputsRef.current[index]?.focus();
  };

  const onSubmit = (data: FormValue) => {
    console.log(data);
  };

  return (
    <div className={'flex flex-col content-center items-center justify-center border-2 p-10'}>
      <form
        className={'flex flex-col items-center justify-center gap-5'}
        onSubmit={handleSubmit(onSubmit)}
      >
        <p className={'text-nature-forest text-lg font-bold'}>Зарегистрироваться</p>
        <div className={'flex w-full flex-col items-center justify-center gap-4 align-middle'}>
          <div className={'flex w-full max-w-[310px] flex-col items-center justify-center gap-6'}>
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <Input
                  placeholder={'user123'}
                  error={errors.name?.message}
                  onArrowUp={() => focusInput(3)}
                  onArrowDown={() => focusInput(1)}
                  autoFocus
                  {...field}
                  ref={(el) => {
                    field.ref(el);
                    inputsRef.current[0] = el;
                  }}
                />
              )}
            />
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <Input
                  placeholder={'user123@gmail.com'}
                  error={errors.email?.message}
                  onArrowUp={() => focusInput(0)}
                  onArrowDown={() => focusInput(2)}
                  {...field}
                  ref={(el) => {
                    field.ref(el);
                    inputsRef.current[1] = el;
                  }}
                />
              )}
            />
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <Input
                  type={'password'}
                  placeholder={'qwerty123'}
                  error={errors.password?.message}
                  onArrowUp={() => focusInput(1)}
                  onArrowDown={() => focusInput(3)}
                  {...field}
                  ref={(el) => {
                    field.ref(el);
                    inputsRef.current[2] = el;
                  }}
                />
              )}
            />
            <Controller
              name="confirmPassword"
              control={control}
              render={({ field }) => (
                <Input
                  type={'password'}
                  placeholder={'qwerty123'}
                  error={errors.password?.message}
                  onArrowUp={() => focusInput(2)}
                  onArrowDown={() => focusInput(0)}
                  {...field}
                  ref={(el) => {
                    field.ref(el);
                    inputsRef.current[3] = el;
                  }}
                />
              )}
            />
            <Controller
              name="checkBoxTerms"
              control={control}
              render={({ field: { value, onChange, ref, ...field } }) => (
                <Checkbox
                  checked={!!value}
                  onCheckedChange={onChange}
                  title={'Я согласен с Условия пользования и Политика конфиденциальности'}
                  className={'flex items-center justify-center'}
                  error={errors.checkBoxTerms?.message}
                  ref={ref}
                  {...field}
                />
              )}
            />
          </div>
        </div>
        <Button size={'sm'} className={'text-sm'} disabled={!isValid} type={'submit'}>
          Зарегистрироваться
        </Button>
      </form>
    </div>
  );
};
