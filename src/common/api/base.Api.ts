import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithReAuth } from '@/common/api/baseQueryWithReauth';

export const baseApi = createApi({
  baseQuery: baseQueryWithReAuth, //если 401 то перезапрос пары токенов и заново отправляется Текущий запрос
  reducerPath: 'baseApi',
  endpoints: () => ({}),
  tagTypes: ['Auth', 'Plants'],
  /*endpoints: (builder) => ({
        getPlants: builder.query<string, void>({
            query: () => 'plants',
        }),
        registration: builder.mutation<RegistrationResponse, SignUp>({
            query: (body) => ({
                method: 'POST',
                url: API_URLS.AUTH.REGISTRATION,
                body,
            }),
        }),
    }),*/
});
