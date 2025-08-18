'use client';

import { Input } from '@/common/components/input';
import { Checkbox } from '@/common/components/checkbox';
import { Button } from '@/common/components/button';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRef } from 'react';
import { signUpValue, signUpSchema } from '@/features/auth/lib/schemas/signUpSchema';
import { useRegistrationMutation } from '@/common/api/base.Api';

export const SignUp = () => {
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);
  const [registration] = useRegistrationMutation();

  const {
    control,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<signUpValue>({
    resolver: zodResolver(signUpSchema),
    mode: 'onTouched',
    reValidateMode: 'onSubmit',
    defaultValues: {
      checkBoxTerms: false,
      login: '',
      email: '',
      password: '',
      confirmPassword: 's',
    },
  });

  const focusInput = (index: number) => {
    inputsRef.current[index]?.focus();
  };

  const onSubmit = (data: signUpValue) => {
    console.log(data);

    const prepearData = {
      login: data.login,
      email: data.email,
      password: data.password,
    };
    try {
      const result = registration(prepearData).unwrap();
      console.log('Успешная регистрация:', result);
    } catch (err) {
      console.error('Ошибка регистрации:', err);
    }
  };

  return (
    <div className={'flex flex-col content-center items-center justify-center'}>
      <form
        className={
          'border-destructive-foreground flex flex-col items-center justify-center gap-5 rounded-xl border-1 p-10 shadow-2xl'
        }
        onSubmit={handleSubmit(onSubmit)}
      >
        <p className={'text-nature-forest text-lg font-bold'}>Зарегистрироваться</p>
        <div className={'flex w-full flex-col items-center justify-center gap-4 align-middle'}>
          <div className={'flex w-full max-w-[310px] flex-col items-center justify-center gap-6'}>
            <Controller
              name="login"
              control={control}
              render={({ field }) => (
                <Input
                  placeholder={'user123'}
                  error={errors.login?.message}
                  onArrowUp={() => focusInput(3)}
                  onArrowDown={() => focusInput(1)}
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
