import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/signup', credentials);
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

const logIn = createAsyncThunk(
  'auth/logIn',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/login', credentials);
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

const logOut = createAsyncThunk(
  'auth/logOut',
  async (token, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/logout', token);
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

const getCurrentUser = createAsyncThunk(
  'auth/getCurrentUser',
  async (token, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/users/current', token);
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

const authOperations = { register, logIn, logOut, getCurrentUser };
export default authOperations;
