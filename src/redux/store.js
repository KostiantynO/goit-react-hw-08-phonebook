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
import { persistedLangReducer } from './lang';
import { persistedThemeReducer } from './theme';

export const store = configureStore({
  reducer: {
    theme: persistedThemeReducer,
    lang: persistedLangReducer,
  },

  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      // redux-persist
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  ],

  devTools: process.env.NODE_ENV === 'development',
});

setupListeners(store.dispatch);
export const persistor = persistStore(store);
