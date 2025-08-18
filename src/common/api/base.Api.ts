import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SignUp } from '@/features/auth/lib/schemas/signUpSchema';
import { RegistrationResponse } from '@/features/auth/lib/types/types';

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://garden-backend-3-lena-3.amvera.io/' }),
  endpoints: (builder) => ({
    getPlants: builder.query<string, void>({
      query: () => 'plants',
    }),
    registration: builder.mutation<RegistrationResponse, SignUp>({
      query: (body) => ({
        method: 'POST',
        url: 'auth/register',
        body,
      }),
    }),
  }),
});

export const { useGetPlantsQuery, useRegistrationMutation } = baseApi;
