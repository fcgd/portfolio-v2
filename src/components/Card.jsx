import React, { useContext, useState } from 'react';
import '../styles/Card.css';
import { motion, AnimatePresence } from 'framer-motion';
import LanguageContext from '../context/LanguageContext';

export const Card = ({ id, title, image, github, web, tech }) => {
	const { language } = useContext(LanguageContext);
	const [show, setShow] = useState(true);

	return (
		<motion.div
			className='card'
			onHoverStart={() => setShow(false)}
			onHoverEnd={() => setShow(true)}
			onTap={() => setShow(!show)}
		>
			<AnimatePresence>
				{show && (
					<motion.img
						key={id}
						src={image}
						alt={title[language]}
						initial={{ opacity: 0, scale: 2 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.8 }}
						exit={{ opacity: 0, scale: 2 }}
					/>
				)}
			</AnimatePresence>
			<AnimatePresence>
				{!show && (
					<motion.article
						className='card__article'
						key={'article' + id}
						initial={{ opacity: 1 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.5 }}
						exit={{ opacity: 0 }}
					>
						<div className='link'>
							<motion.a
								className='link_git'
								href={github}
								title='code'
								rel='noopener noreferrer'
								target='_blank'
							>
								<lord-icon
									src='https://cdn.lordicon.com/etllbcfy.json'
									trigger='loop-on-hover'
									delay='2000'
									style={{
										width: '32px',
										height: '32px',
										color: 'currentColor',
									}}
								></lord-icon>
							</motion.a>
						</div>
						<motion.a
							className='link__web'
							href={web}
							title='site'
							rel='noopener noreferrer'
							target='_blank'
							whileHover={{ scale: 1.05 }}
						>
							<h3 className='card__title'>{title[language]}</h3>
						</motion.a>
						<p>{tech.join(', ')}</p>
					</motion.article>
				)}
			</AnimatePresence>
		</motion.div>
	);
};
