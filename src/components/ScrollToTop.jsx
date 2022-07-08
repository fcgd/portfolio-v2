import React, { useContext, useEffect, useState } from 'react';
import '../styles/ScrollToTop.css';
import LanguageContext from '../context/LanguageContext';
import { motion } from 'framer-motion';
import arrowTop from '/icons/arrow-top.svg';

export const ScrollToTop = () => {
	const { language } = useContext(LanguageContext);
	const [showScroll, setShowScroll] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 100) {
				setShowScroll(true);
			} else {
				setShowScroll(false);
			}
		});
	}, []);

	return (
		<>
			{showScroll ? (
				<motion.button
					title={`${language === 'es' ? 'Volver arriba' : 'Back to top'}`}
					className='scroll'
					onClick={() => {
						window.scrollTo({
							top: 0,
							behavior: 'smooth',
						});
					}}
					whileHover={{
						scale: 1.5,
						transition: {
							duration: 0.5,
							ease: 'easeInOut',
							loop: Infinity,
							delay: 0.3,
							yoyo: true,
						},
					}}
				>
					<img src={arrowTop} alt='Top Arrow' />
				</motion.button>
			) : null}
		</>
	);
};
