import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './reset.css';
import { HashRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import App from './App';
import { AppThemeProvider } from './utils/theme/AppThemeProvider';

const queryClient = new QueryClient();

ReactDOM.render(
  <HashRouter>
    <QueryClientProvider client={queryClient}>
      <AppThemeProvider>
        <App />
      </AppThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </HashRouter>,
  document.getElementById('root')
);
