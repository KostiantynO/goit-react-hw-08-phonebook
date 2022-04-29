import { getRefs } from 'utils';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
import './index.css';

const { root } = getRefs();

createRoot(root).render(
  <StrictMode>
    <BrowserRouter basename="/goit-react-hw-08-phonebook/">
      <App />
    </BrowserRouter>
  </StrictMode>
);
