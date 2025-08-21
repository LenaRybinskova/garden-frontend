import { baseApi } from '@/common/api/base.Api';
import { MeResponse, RegistrationResponse } from '@/features/auth/lib/types/types';
import { SignUp } from '@/features/auth/lib/schemas/signUpSchema';
import { API_URLS } from '@/common/api/apiURLs';
import { signInValue } from '@/features/auth/lib/schemas/signInSchema';

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    registration: builder.mutation<RegistrationResponse, SignUp>({
      /*     providesTags: ['Auth'], метка исп только в эндпоинтах с квери*/
      /*        invalidatesTags: ['Auth'],*/
      query: (body) => ({
        method: 'POST',
        url: API_URLS.AUTH.REGISTRATION,
        body,
      }),
    }),
    login: builder.mutation<RegistrationResponse, signInValue>({
      query: (body) => ({
        method: 'POST',
        url: API_URLS.AUTH.LOGIN,
        body,
      }),
    }),
    logout: builder.mutation<boolean, void>({
      invalidatesTags: ['Auth'],
      query: () => ({
        method: 'POST',
        url: API_URLS.AUTH.LOGOUT,
      }),
    }),
    me: builder.query<MeResponse, void>({
      providesTags: ['Auth'],
      query: () => ({
        method: 'POST',
        url: API_URLS.AUTH.ME,
      }),
    }),
  }),
  overrideExisting: true,
});

export const { useRegistrationMutation, useLoginMutation, useLogoutMutation, useMeQuery } = authApi;
