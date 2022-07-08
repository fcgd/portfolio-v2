import React from 'react';
import './App.css';
import { LanguageProvider } from './context/LanguageContext';
import { LangToggler } from './components/LangToggler';
import { ThemeToggler } from './components/ThemeToggler';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Socials } from './components/Socials';
import { ScrollToTop } from './components/ScrollToTop';

function App() {
	return (
		<div className='App'>
			<LanguageProvider>
				<LangToggler />
				<ThemeToggler />
				<Navbar />
				<Home />
				<Skills />
				<Projects />
				<Contact />
				<Socials />
				<ScrollToTop />
			</LanguageProvider>
		</div>
	);
}

export default App;
