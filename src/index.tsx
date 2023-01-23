import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App';
import { ThemeProvider } from './app/providers/ThemeProvider';
import './shared/config/i18n/i18n';
import { StoreProvider } from 'app/providers/StoreProvider';
import { createRoot } from 'react-dom/client';
// styles
import './app/styles/index.scss';

const container = document.getElementById( 'root' );

if ( container ) {
    createRoot( container ).render( <BrowserRouter>
        <StoreProvider>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </StoreProvider>
    </BrowserRouter> );
} else {
    throw new Error( 'Root element not found' );
}
