import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';

import { ContextProvider } from './core/dependency-injection/ContextProvider.tsx';
import { provideUserRepository } from './modules/dependency-injection/user/UserRepositoryContext.ts';
import { userAdapter } from './modules/infrastructure/adapters/userAdapter.ts';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './lib/react-query.ts';
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', 
    },
    secondary: {
      main: '#dc004e',
    },
  },
});
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <BrowserRouter>
  <ThemeProvider theme={theme}>
   <QueryClientProvider client={queryClient}>
   
   <ContextProvider providers={[
      provideUserRepository(userAdapter ),
   ]}> 
   <App />
    </ContextProvider>
   
   </QueryClientProvider>
   </ThemeProvider>
   

  </BrowserRouter>
);

