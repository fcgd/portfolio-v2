import React, { createContext, useState } from 'react';

const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
	const [language, setLanguage] = useState(
		window.localStorage.getItem('lang') === 'es' ? 'es' : 'en'
	);

	const value = { language, setLanguage };

	return (
		<LanguageContext.Provider value={value}>
			{children}
		</LanguageContext.Provider>
	);
};

export { LanguageProvider };

export default LanguageContext;
