import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const API = createApi({
  reducerPath: 'anything',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000' }),
  tagTypes: ['app1'],
  endpoints: (builder) => ({

    list: builder.query({
      query: () => "app1/",
      providesTags: ['app1']
    }),

    addMaterial: builder.mutation({
      query: (material) => ({
        url: "app1/",
        method: "POST",
        body: material
      }),
      invalidatesTags: ['app1']
    }),

    updateMaterial: builder.mutation({
      query: ({ details, ...rest }) => ({
        url: `app1/${details}`,
        method: "PUT",
        body: rest
      }), invalidatesTags: ['app1']
    }),

    deleteMaterial: builder.mutation({
      query: id => ({
        url: `/app1/${id}`,
        method: "DELETE"
      }),
      invalidatesTags: ['app1']
    })
  })
})

export const { useListQuery, useAddMaterialMutation, useUpdateMaterialMutation, useDeleteMaterialMutation } = API
