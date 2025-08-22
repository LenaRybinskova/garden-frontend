'use client';

import { ReactNode, useEffect, useState } from 'react';
import { useLazyMeQuery } from '@/features/auth/api/AuthApi';
import { LocalStorage } from '@/common/utils/localStorage';

type AuthLayoutProps = {
  children: (isAuthenticated: boolean) => ReactNode;
};

const AuthLayout = ({ children }: AuthLayoutProps) => {
  const [authData, { isSuccess }] = useLazyMeQuery();
  const [token, setToken] = useState<null | string>(null);

  useEffect(() => {
    const handleStorageChange = () => {
      setToken(LocalStorage.getToken());
    };
    handleStorageChange();
    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  useEffect(() => {
    if (token) {
      authData();
    }
  }, [authData, token]);

  const isAuthenticated = isSuccess && !!token;

  return <>{children(isAuthenticated)}</>;
};

export default AuthLayout;

/*
'use client'

import { useEffect, ComponentType, useState } from 'react'
import {useMeQuery} from '@/features/auth/api/AuthApi';
import {LocalStorage} from '@/common/utils/localStorage';


export function withAuthMe<T extends object>(Component: ComponentType<T>) {
    return function WrappedComponent(props: T) {
        const [authState, setAuthState] = useState<string | null>(null)

        const { data: auth, refetch } = useMeQuery()
        console.log("data auth", auth)

        useEffect(() => {
            const token = LocalStorage.getToken()
            if (token) {
                console.log('withAuthMe useEffect')
                refetch()
                    .unwrap()
                    .then(() => setAuthState(token))
            }
        }, [refetch, authState])

        return <Component {...props} auth={auth} trigger={refetch} /> // refetch?:()=>void
    }
}*/

/*
'use client';

import { ComponentType, useEffect, useState } from 'react';
import { useLazyMeQuery } from '@/features/auth/api/AuthApi';
import { LocalStorage } from '@/common/utils/localStorage';

export function withAuthMe<T extends object>(Component: ComponentType<T>) {
  return function WrappedComponent(props: T) {
    const [authData, { isSuccess }] = useLazyMeQuery();
    const [token, setToken] = useState<null | string>(null);

    useEffect(() => {
      const handleStorageChange = () => {
        setToken(LocalStorage.getToken());
      };
      handleStorageChange();
      window.addEventListener('storage', handleStorageChange);
      return () => {
        window.removeEventListener('storage', handleStorageChange);
      };
    }, []);

    useEffect(() => {
      if (token) {
        authData();
      }
    }, [authData, token]);

    const isAuthenticated = isSuccess && !!token;
    return <Component {...props} auth={isAuthenticated} />; // refetch?:()=>void
  };
}

export default withAuthMe(Header) пример использования ХОКа;

*/
