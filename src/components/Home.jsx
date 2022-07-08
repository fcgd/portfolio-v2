import React, { useContext } from 'react';
import '../styles/Home.css';
import LanguageContext from '../context/LanguageContext';
import { motion } from 'framer-motion';

export const Home = () => {
	const { language } = useContext(LanguageContext);
	const fabricio = ['F', 'a', 'b', 'r', 'i', 'c', 'i', 'o'];
	const cesaretti = ['C', 'e', 's', 'a', 'r', 'e', 't', 't', 'i'];

	const titleParent = {
		hidden: {
			opacity: 0,
		},
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0.5,
			},
		},
	};

	const titleParent2 = {
		hidden: {
			opacity: 0,
		},
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
				delayChildren: 1.5,
			},
		},
	};

	const titleTextReveal = {
		hidden: {
			y: '120%',
		},
		show: {
			y: '0%',
		},
	};

	const transition = {
		duration: 0.8,
		ease: [0.6, -0.05, 0.01, 0.9],
	};

	return (
		<div className='section__home' id='home'>
			<motion.ol
				className='name-wrapper'
				variants={titleParent}
				initial='hidden'
				animate='show'
			>
				{fabricio.map((letter, index) => {
					return (
						<motion.li
							key={index}
							variants={titleTextReveal}
							transition={transition}
						>
							{letter}
						</motion.li>
					);
				})}
			</motion.ol>
			<motion.ol
				className='name-wrapper'
				variants={titleParent2}
				initial='hidden'
				animate='show'
			>
				{cesaretti.map((letter, index) => {
					return (
						<motion.li
							key={index}
							variants={titleTextReveal}
							transition={transition}
						>
							{letter}
						</motion.li>
					);
				})}
			</motion.ol>
			<motion.h2
				className='home__h2'
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1, delay: 3 }}
			>
				{language === 'es' ? 'Desarrollador Web' : 'Web Developer'}
			</motion.h2>
		</div>
	);
};
