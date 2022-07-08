import React, { useContext, useState } from 'react';
import '../styles/Navbar.css';
import LanguageContext from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { data } from '../data/navigation';
import { Resume } from './Resume';

export const Navbar = () => {
	const [activeIndex, setActiveIndex] = useState(null);
	const { language } = useContext(LanguageContext);

	return (
		<nav className='nav'>
			<motion.ul onHoverEnd={() => setActiveIndex(null)} className='nav__pages'>
				{data.map(({ label, path }, index) => {
					const isActive = activeIndex === index;

					return (
						<motion.li
							key={index}
							onHoverStart={() => setActiveIndex(index)}
							className='nav__item'
						>
							<a href={path} className='nav__link'>
								{isActive ? (
									<motion.div
										layoutId='underline'
										className='underline'
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										exit={{ opacity: 0 }}
									/>
								) : null}
								<span>{label[language]}</span>
							</a>
						</motion.li>
					);
				})}
			</motion.ul>
			<Resume />
		</nav>
	);
};
