import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SignUp } from '@/features/auth/lib/schemas/signUpSchema';
import { RegistrationResponse } from '@/features/auth/lib/types/types';
import { API_URLS } from '@/common/api/apiURLs';

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: API_URLS.BASE_URL }),
  endpoints: (builder) => ({
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
  }),
});

export const { useGetPlantsQuery, useRegistrationMutation } = baseApi;
