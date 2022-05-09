import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';
import authSelectors from './authSelectors';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

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
  async ({ lang, ...credentials }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/signup', credentials);
      console.log('data', data);
      axiosToken.set(data.token);
      return data;
    } catch ({ message, response: { data, status } }) {
      toast.error(lang.registerView.registerError);
      return rejectWithValue({ message, data, status });
    }
  }
);

const logIn = createAsyncThunk(
  'auth/logIn',
  async ({ lang, ...credentials }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/login', credentials);

      axiosToken.set(data.token);
      return data;
    } catch ({ message, response: { data, status } }) {
      toast.error(lang.loginView.loginError);
      return rejectWithValue({ message, data, status });
    }
  }
);

const logOut = createAsyncThunk(
  'auth/logOut',
  async (_, { rejectWithValue }) => {
    if (!axios.defaults.headers.common.Authorization) {
      return rejectWithValue({ message: 'no token' });
    }

    try {
      await axios.post('/users/logout');

      axiosToken.unset();
    } catch ({ message, response: { data, status } }) {
      return rejectWithValue({ message, data, status });
    }
  }
);

const refresh = createAsyncThunk(
  'auth/refresh',
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const persistedToken = authSelectors.getToken(state);

    if (!persistedToken) {
      return rejectWithValue(`persistedToken is: ${persistedToken}`);
    }

    axiosToken.set(persistedToken);

    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch ({ message, response: { data, status } }) {
      return rejectWithValue({ message, data, status });
    }
  }
);

const authOperations = { register, logIn, logOut, refresh };
export default authOperations;
