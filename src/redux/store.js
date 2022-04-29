import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import {
  persistStore,
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import { persistedAuthReducer } from './auth';
import { persistedLangReducer } from './lang';
import { persistedThemeReducer } from './theme';

const middleware = getDefaultMiddleware => [
  ...getDefaultMiddleware({
    // redux-persist
    serializableCheck: {
      ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    lang: persistedLangReducer,
    theme: persistedThemeReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

setupListeners(store.dispatch);
export const persistor = persistStore(store);
