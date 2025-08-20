import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query';
import { Mutex } from 'async-mutex';
import { API_URLS } from '@/common/api/apiURLs';

const mutex = new Mutex();

// кладем в заголовок аксессТоке и возвращаем заголовок
const baseQuery = fetchBaseQuery({
  baseUrl: API_URLS.BASE_URL,
  credentials: 'include',
  prepareHeaders: (headers) => {
    const token = localStorage.getItem('token');

    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }

    return headers;
  },
});

export const baseQueryWithReAuth: BaseQueryFn<
  FetchArgs | string,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  await mutex.waitForUnlock();
  let result = await baseQuery(args, api, extraOptions); //выполняется отправленный запрос и сохр его результат

  //если ответ с ошибкой, то берем из ЛС асессТокен, и отправляет запрос на бек за новой парой токенов
  if (result.error && result.error.status === 401) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();

      try {
        const token = localStorage.getItem('token');
        if (token) {
          const refreshResult = await baseQuery(
            {
              method: 'POST',
              url: API_URLS.AUTH.UPDATE_TOKENS,
            },
            api,
            extraOptions,
          );

          // проверяем, что ответ содержит новый accessToken
          if (
            typeof refreshResult.data === 'object' &&
            refreshResult.data !== null &&
            'accessToken' in refreshResult.data &&
            refreshResult.data?.accessToken &&
            typeof refreshResult.data?.accessToken === 'string'
          ) {
            localStorage.setItem('token', refreshResult.data.accessToken); //сохр в ЛС новый аксееТокен

            // Повторяем ПЕРВОНАЧАЛЬНЫЙ запрос с новым токеном
            result = await baseQuery(args, api, extraOptions);
          }
        }
      } finally {
        release();
      }
    } else {
      await mutex.waitForUnlock();
      result = await baseQuery(args, api, extraOptions);
    }
  }

  return result;
};
