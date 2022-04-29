import { getRefs } from 'utils';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';

// redux
import { Provider } from 'react-redux';
import { store, persistor } from 'redux/store';

import { PersistGate } from 'redux-persist/integration/react';
import { LoadingIcon } from 'components/common';

import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';

const { root } = getRefs();

createRoot(root).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={<LoadingIcon />} persistor={persistor}>
        <BrowserRouter basename="/goit-react-hw-08-phonebook/">
          <App />

          <ToastContainer autoClose={2500} />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </StrictMode>
);
