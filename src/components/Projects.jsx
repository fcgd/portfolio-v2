import React, { useContext } from 'react';
import LanguageContext from '../context/LanguageContext';
import '../styles/Projects.css';
import { motion } from 'framer-motion';
import { Card } from './Card';
import { PROJECTS_EN, PROJECTS_ES } from '../data/projects';

export const Projects = ({}) => {
	const { language } = useContext(LanguageContext);
	const projects = language === 'es' ? PROJECTS_ES : PROJECTS_EN;

	const container = {
		hidden: {
			opacity: 0,
			y: 50,
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				delayChildren: 0.5,
				staggerChildren: 0.3,
			},
		},
	};

	const item = {
		hidden: { opacity: 0, y: 200 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
	};

	return (
		<motion.section
			className='section__projects'
			id='projects'
			initial={{ y: 50 }}
			whileInView={{ y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 3 }}
		>
			<motion.h2
				className='projects__h2'
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 2 }}
				viewport={{ once: true }}
			>
				{language === 'es' ? 'Proyectos' : 'Projects'}
			</motion.h2>
			<motion.div
				className='projects__container'
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true }}
				variants={container}
			>
				{projects.map(({ id, title, description, image, github, web }) => (
					<motion.div
						className='projects__card-container'
						key={id}
						variants={item}
					>
						<Card
							id={id}
							title={title}
							description={description}
							image={image}
							github={github}
							web={web}
						/>
					</motion.div>
				))}
			</motion.div>
		</motion.section>
	);
};
