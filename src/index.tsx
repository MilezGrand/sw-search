import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const newQueryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <QueryClientProvider client={newQueryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
