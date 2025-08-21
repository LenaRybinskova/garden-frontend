'use client';

import { Input } from '@/common/components/input';
import { Button } from '@/common/components/button';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRef } from 'react';
import { useLoginMutation } from '@/features/auth/api/AuthApi';
import { useRouter } from 'next/navigation';
import { signInSchema, signInValue } from '@/features/auth/lib/schemas/signInSchema';

export const SignIn = () => {
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);
  const [login] = useLoginMutation();
  const router = useRouter();

  const {
    control,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<signInValue>({
    resolver: zodResolver(signInSchema),
    mode: 'onTouched',
    reValidateMode: 'onSubmit',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const focusInput = (index: number) => {
    inputsRef.current[index]?.focus();
  };

  const onSubmit = (data: signInValue) => {
    console.log(data);

    login(data)
      .unwrap()
      .then((res) => {
        localStorage.setItem('token', res.accessToken);
        router.push('/');
      });
  };

  return (
    <div className={'flex flex-col content-center items-center justify-center'}>
      <form
        className={
          'border-destructive-foreground flex min-w-[391px] flex-col items-center justify-center gap-5 rounded-xl border-1 p-10 shadow-2xl'
        }
        onSubmit={handleSubmit(onSubmit)}
      >
        <p className={'text-nature-forest text-lg font-bold'}>Войти</p>
        <div className={'flex w-full flex-col items-center justify-center gap-4 align-middle'}>
          <div className={'flex w-full flex-col items-center justify-center gap-6'}>
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
          </div>
        </div>
        <Button size={'sm'} className={'text-sm'} disabled={!isValid} type={'submit'}>
          Войти
        </Button>
      </form>
    </div>
  );
};

/*
<Controller
    name="email"
    control={control}
    render={({field}) => (
        <Input
            autoFocus
            placeholder={'user123@gmail.com'}
            error={errors.email?.message}
            onArrowUp={() => focusInput(2)}
            onArrowDown={() => focusInput(1)}
            className={"w-[305px]"}
            {...field}
            ref={(el) => {
                field.ref(el);
                inputsRef.current[0] = el;
            }}
        />
    )}
/>
<Controller
    name="password"
    control={control}
    render={({field}) => (
        <Input
            type={'password'}
            placeholder={'qwerty123'}
            error={errors.password?.message}
            onArrowUp={() => focusInput(0)}
            onArrowDown={() => focusInput(2)}
            {...field}
            ref={(el) => {
                field.ref(el);
                inputsRef.current[1] = el;
            }}
        />
    )}
/>*/
