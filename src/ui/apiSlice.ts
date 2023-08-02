import { Door } from '@/models/Door';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  tagTypes: ['doors'],
  endpoints: (builder) => ({
    getAllDoors: builder.query<Door[], void>({
      query: () => ({
        url: '/doors',
        method: 'GET',
      }),
      providesTags: (response) =>
        Array.isArray(response)
          ? response.map(({ id }) => ({ type: 'doors', id }))
          : [],
    }),
    getDoorById: builder.query<Door, string>({
      query: (id) => ({
        url: `/doors/${id}`,
        method: 'GET',
      }),
      providesTags: (response) =>
        response?.id ? [{ type: 'doors', id: response.id }] : [],
    }),
  }),
});

export const { useGetAllDoorsQuery, useGetDoorByIdQuery } = apiSlice;
