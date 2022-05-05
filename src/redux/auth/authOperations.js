import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import authSelectors from './authSelectors';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const { log } = console;

const axiosToken = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },

  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/signup', credentials);
      axiosToken.set(data.token);
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
      axiosToken.set(data.token);
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

const logOut = createAsyncThunk(
  'auth/logOut',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('/users/logout');
      axiosToken.unset();
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

const getCurrentUser = createAsyncThunk(
  'auth/getCurrentUser',
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const persistedToken = authSelectors.getToken(state);

    if (!persistedToken) {
      throw new Error(`persistedToken is: ${persistedToken}`);
    }

    axiosToken.set(persistedToken);
    log({ persistedToken });

    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

const authOperations = { register, logIn, logOut, getCurrentUser };
export default authOperations;
