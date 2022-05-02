import { combineReducers, configureStore } from '@reduxjs/toolkit';

import {
  persistReducer,
  persistStore,
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';

import { persistedAuthReducer } from './auth';
import { drawerReducer } from './drawer';
import { langReducer } from './lang';
import { themeReducer } from './theme';

import { setupListeners } from '@reduxjs/toolkit/query';
import { contactsApiReducer } from './contacts';
import storage from 'redux-persist/lib/storage';

const middleware = getDefaultMiddleware => [
  ...getDefaultMiddleware({
    // redux-persist
    serializableCheck: {
      ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const rootPersistConfig = {
  key: 'root',
  storage,
  blacklist: ['auth', 'contacts'],
};

const rootReducer = combineReducers({
  auth: persistedAuthReducer,
  contacts: contactsApiReducer,
  lang: langReducer,
  theme: themeReducer,
  drawer: drawerReducer,
});

const persistedRootReducer = persistReducer(rootPersistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedRootReducer,
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

setupListeners(store.dispatch);
export const persistor = persistStore(store);
