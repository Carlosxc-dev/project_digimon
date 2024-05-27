import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
// Context
import { AppProvider } from '../src/createContext/createContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<AppProvider>
			<App />
		</AppProvider>
	</React.StrictMode>
);
