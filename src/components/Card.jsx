import React, { useEffect, useState } from 'react';
import '../styles/Card.css';
import { motion } from 'framer-motion';

export const Card = ({ id, title, description, image, github, web }) => {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}
	}, [!isOpen]);

	const handleClick = () => {
		setIsOpen(!isOpen);
	};

	return (
		<motion.div className='card' id={id} key={id}>
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
						<motion.img src={image} alt={title} />
					</motion.div>
				</div>
			</div>
			<h3 className='card__title'>{title}</h3>
			<p className='card__description'>{description}</p>
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
