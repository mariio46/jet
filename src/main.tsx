import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/app';
import '@/assets/css/globals.css';
import { ThemeProvider } from '@/services/providers/theme-provider';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
            <App />
        </ThemeProvider>
    </React.StrictMode>,
);
