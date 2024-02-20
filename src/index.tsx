import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import './index.css';
import './reset.css';

import { SnackbarProvider } from 'notistack';
import App from './App';
import { AuthProvider } from './context/AuthProvider';
import { AppThemeProvider } from './utils/theme/AppThemeProvider';

const queryClient = new QueryClient();

ReactDOM.render(
  <HashRouter>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <SnackbarProvider maxSnack={3}>
          <AppThemeProvider>
            <App />
          </AppThemeProvider>
        </SnackbarProvider>
      </AuthProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </HashRouter>,
  document.getElementById('root')
);
