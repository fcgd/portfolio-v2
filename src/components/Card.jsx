import React, { useContext, useEffect, useState } from 'react';
import '../styles/Card.css';
import { motion } from 'framer-motion';
import LanguageContext from '../context/LanguageContext';

export const Card = ({ id, title, description, image, github, web, color }) => {
	const [isOpen, setIsOpen] = useState(false);
	const { language } = useContext(LanguageContext);

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflowY = 'auto';
			document.body.style.overflowX = 'hidden';
		}
	}, [!isOpen]);

	const handleClick = () => {
		if (window.innerWidth < 768) {
			return;
		} else {
			setIsOpen(!isOpen);
		}
	};

	return (
		<motion.div
			className='card'
			id={id}
			key={id}
			style={{
				backgroundColor: color,
			}}
		>
			<div className='image__shadow'>
				<div
					className={`${isOpen ? 'modal-open' : 'modal'}`}
					onClick={handleClick}
				>
					<motion.div
						className={`${isOpen ? 'card__image-open' : 'card__image'}`}
						onClick={handleClick}
						layout
					>
						<motion.img src={image} alt={title[language]} />
					</motion.div>
				</div>
			</div>
			<h3 className='card__title'>{title[language]}</h3>
			<p className='card__description'>{description[language]}</p>
			<div className='link'>
				<motion.a
					className='link_git'
					href={github}
					rel='noopener noreferrer'
					target='_blank'
					whileHover={{ scale: 1.05 }}
				>
					code
				</motion.a>
				<motion.a
					className='link__web'
					href={web}
					rel='noopener noreferrer'
					target='_blank'
					whileHover={{ scale: 1.05 }}
				>
					site
				</motion.a>
			</div>
		</motion.div>
	);
};
