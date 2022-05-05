import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authOperations from './authOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  loading: false,
  error: null,
};

const onAuthPending = state => {
  state.error = null;
  state.loading = true;
  return state;
};

const onAuthFulfilled = (state, payload) => {
  state.token = payload?.token || initialState.token;
  state.user = payload?.user || initialState.user;
  state.isLoggedIn = payload ? true : false;
  state.loading = false;
  return state;
};

const onPersistedAuthFulfilled = (state, payload) => {
  state.user = payload ? payload : initialState.user;
  state.isLoggedIn = payload ? true : false;
  state.loading = false;
  return state;
};

const onAuthRejected = (state, payload) => {
  state.error = payload;
  state.user = initialState.user;
  state.isLoggedIn = false;
  state.loading = false;
  return state;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.pending](state) {
      onAuthPending(state);
    },
    [authOperations.register.fulfilled](state, { payload }) {
      onAuthFulfilled(state, payload);
    },
    [authOperations.register.rejected](state, { payload }) {
      onAuthRejected(state, payload);
    },

    [authOperations.logIn.pending](state) {
      onAuthPending(state);
    },
    [authOperations.logIn.fulfilled](state, { payload }) {
      onAuthFulfilled(state, payload);
    },
    [authOperations.logIn.rejected](state, { payload }) {
      onAuthRejected(state, payload);
    },

    [authOperations.logOut.pending]: state => {
      onAuthPending(state);
    },
    [authOperations.logOut.fulfilled]: state => {
      state.user = initialState.user;
      state.token = initialState.token;
      state.isLoggedIn = initialState.isLoggedIn;
      state.loading = initialState.loading;
      state.error = initialState.error;
    },
    [authOperations.logOut.rejected]: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },

    [authOperations.getCurrentUser.pending]: state => {
      onAuthPending(state);
    },
    [authOperations.getCurrentUser.fulfilled]: (state, { payload }) => {
      onPersistedAuthFulfilled(state, payload);
    },
    [authOperations.getCurrentUser.rejected]: (state, { payload }) => {
      onAuthRejected(state, payload);
    },
  },
});

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const persistedAuthReducer = persistReducer(
  authPersistConfig,
  authSlice.reducer
);
