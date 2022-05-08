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
  state.token = payload.token;
  state.user = payload.user;
  state.isLoggedIn = true;
  state.loading = false;
  return state;
};

const onRefreshAuthFulfilled = (state, payload) => {
  state.user = payload;
  state.isLoggedIn = true;
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
    // pending
    [authOperations.register.pending](state) {
      onAuthPending(state);
    },
    [authOperations.logIn.pending](state) {
      onAuthPending(state);
    },
    [authOperations.logOut.pending]: state => {
      onAuthPending(state);
    },
    [authOperations.refresh.pending]: state => {
      onAuthPending(state);
    },

    // fulfilled
    [authOperations.register.fulfilled](state, { payload }) {
      onAuthFulfilled(state, payload);
    },

    [authOperations.logIn.fulfilled](state, { payload }) {
      onAuthFulfilled(state, payload);
    },
    [authOperations.logOut.fulfilled]: () => initialState,
    [authOperations.refresh.fulfilled]: (state, { payload }) => {
      onRefreshAuthFulfilled(state, payload);
    },

    // rejected
    [authOperations.register.rejected](state, { payload }) {
      onAuthRejected(state, payload);
    },
    [authOperations.logIn.rejected](state, { payload }) {
      onAuthRejected(state, payload);
    },
    [authOperations.logOut.rejected]: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
    [authOperations.refresh.rejected]: (state, { payload }) => {
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
