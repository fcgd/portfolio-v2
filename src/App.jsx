import React, { useState } from 'react';
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
import { Profile } from './components/Profile';
import { Reset } from './components/Reset';

function App() {
	const [count, setCount] = useState(0);
	const [showReset, setShowReset] = useState(false);

	const handleReset = () => {
		setCount(count + 1);
		setShowReset(false);
	};

	return (
		<div className='App'>
			<LanguageProvider>
				<LangToggler />
				<ThemeToggler />
				<Navbar />
				{showReset && <Reset onClick={handleReset} />}
				<Home key={count} setShowReset={setShowReset} />
				<Profile />
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
