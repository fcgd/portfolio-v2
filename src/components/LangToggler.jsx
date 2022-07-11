import React, { useContext } from 'react';
import LanguageContext from '../context/LanguageContext';
import { motion, useCycle } from 'framer-motion';
import LangIcon from '../../public/icons/language.svg';

export const LangToggler = () => {
	const [animate, cycleAnimate] = useCycle({ rotate: 0 }, { rotate: 360 });
	const { language, setLanguage } = useContext(LanguageContext);

	const handleLanguage = () => {
		setLanguage(language === 'en' ? 'es' : 'en');
		cycleAnimate();
	};

	return (
		<button
			className='lang-toggler'
			title={`${language === 'es' ? 'Change to English' : 'Cambiar a Español'}`}
			onClick={handleLanguage}
		>
			<motion.img
				src={LangIcon}
				alt={`${language === 'es' ? 'Idioma' : 'Language'}`}
				animate={animate}
			/>
			<motion.span animate={animate}>
				{language === 'en' ? 'es' : 'en'}
			</motion.span>
		</button>
	);
};
