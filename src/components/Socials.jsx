import React from 'react';
import '../styles/Socials.css';
import { motion } from 'framer-motion';
import { Github, Linkedin } from '@icons-pack/react-simple-icons';

export const Socials = () => {
	return (
		<div className='socials'>
			<motion.a
				href='https://www.linkedin.com/in/fabricio-cesaretti/'
				rel='noopener noreferrer'
				target='_blank'
				whileHover={{ scale: 1.1 }}
			>
				<Linkedin size={24} color='white' />
			</motion.a>
			<motion.a
				href='https://github.com/fcgd'
				rel='noopener noreferrer'
				target='_blank'
				whileHover={{ scale: 1.1 }}
			>
				<Github size={24} color='white' />
			</motion.a>
		</div>
	);
};
