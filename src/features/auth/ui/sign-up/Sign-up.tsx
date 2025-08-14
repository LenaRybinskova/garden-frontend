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
    path: ['confirmPassword'] /*под каким полем будет ошибка*/,
  });

type FormValue = z.infer<typeof signUpSchema>;

export const SignUp = () => {
  console.log('RERENDER');
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

  const onSubmit = (data: FormValue) => {
    console.log(data);
  };

  console.log('Errors:', errors);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={
        'border-nature-beige flex flex-col content-center items-center justify-center gap-3 rounded-lg border-2 shadow'
      }
    >
      <div className={'flex flex-col items-center justify-center'}>
        <p className={'text-nature-forest text-lg font-bold'}>Зарегистрироваться</p>
        <div className={'flex w-full flex-col items-center justify-center gap-3 align-middle'}>
          <div className={'flex w-full max-w-[310px] flex-col items-center justify-center gap-4'}>
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <Input placeholder={'user123'} error={errors.name?.message} {...field} />
              )}
            />
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <Input placeholder={'user123@gmail.com'} error={errors.email?.message} {...field} />
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
                  {...field}
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
                  error={errors.confirmPassword?.message}
                  {...field}
                />
              )}
            />
            <Controller
              name="checkBoxTerms"
              control={control}
              defaultValue={false} /*неявно типиз field*/
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
      </div>
    </form>
  );
};
