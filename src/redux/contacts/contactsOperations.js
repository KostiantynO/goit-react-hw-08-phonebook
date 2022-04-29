import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const addContact = createAsyncThunk(
  'contacts/addContact',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/contacts', credentials);
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

const getContacts = createAsyncThunk(
  'contacts/getContacts',
  async (token, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/contacts', token);
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.patch(
        `/contacts/${credentials.contactId}`,
        credentials
      );
      return data;
    } catch (error) {}
  }
);

const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(
        `contacts/${credentials.contactId}`,
        credentials.token
      );
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

const contactsOperations = {
  addContact,
  getContacts,
  updateContact,
  deleteContact,
};

export default contactsOperations;
