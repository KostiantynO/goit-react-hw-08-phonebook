import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import authSelectors from 'redux/auth/authSelectors';

const baseQuery = fetchBaseQuery({
  prepareHeaders: (headers, { getState }) => {
    // const token = getState().auth.token;
    const token = authSelectors.getToken(getState());

    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }

    return headers;
  },
  baseUrl: 'https://connections-api.herokuapp.com',
});

const contactsURL = '/contacts';
const type = 'Contacts';
const contactsTypeObj = { type, id: 'LIST' };

const contactsApi = createApi({
  reducerPath: 'contacts',
  baseQuery,

  tagTypes: [type],

  endpoints: builder => ({
    createContact: builder.mutation({
      query: body => ({
        url: `${contactsURL}`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [contactsTypeObj],
    }),

    readContacts: builder.query({
      query: () => contactsURL,
      providesTags: result =>
        result
          ? [{ ...result.map(({ id }) => ({ type, id })) }, contactsTypeObj]
          : [contactsTypeObj],
    }),

    updateContact: builder.mutation({
      query: ({ id, ...body }) => ({
        url: `${contactsURL}/${id}`,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: (result, error, id) => [{ type, id }],
    }),

    deleteContact: builder.mutation({
      query: id => ({
        url: `${contactsURL}/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (result, error, id) => [{ type, id }],
    }),
  }),
});

export const contactsMiddleware = contactsApi.middleware;

export const {
  useCreateContactMutation,
  useReadContactsQuery,
  useUpdateContactMutation,
  useDeleteContactMutation,
} = contactsApi;

export const contactsApiReducer = contactsApi.reducer;
