// src/context/AppContext.tsx
import React, { createContext, useState, ReactNode } from 'react';

interface AppState {
	someValue: string;
	setSomeValue: (value: string) => void;
}

const defaultState: AppState = {
	someValue: '',
	setSomeValue: () => {},
};

export const AppContext = createContext<AppState>(defaultState);

interface AppProviderProps {
	children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
	const [someValue, setSomeValue] = useState<string>('');

	return (
		<AppContext.Provider value={{ someValue, setSomeValue }}>
			{children}
		</AppContext.Provider>
	);
};
