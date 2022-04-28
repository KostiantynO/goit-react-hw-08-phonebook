import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from 'components/App';
import { getRefs } from 'utils';
import './index.css';

const { root } = getRefs();
createRoot(root).render(
  <StrictMode>
    {/* <BrowserRouter basename="/goit-react-hw-08-phonebook/"> */}
    <App />
    {/* </BrowserRouter> */}
  </StrictMode>
);
