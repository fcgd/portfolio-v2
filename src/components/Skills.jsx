import React, { useContext } from 'react';
import '../styles/Skills.css';
import LanguageContext from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { IconList } from './IconList';

export const Skills = () => {
	const { language } = useContext(LanguageContext);
	const data = ['frontend', 'backend', 'tools'];

	return (
		<div className='section__skills' id='skills'>
			<motion.h2
				className='skills__title'
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 3 }}
				viewport={{ once: true }}
			>
				{language === 'es'
					? 'Habilidades y Tecnologías'
					: 'Skills and Technologies'}
			</motion.h2>

			<div className='skills__container'>
				{data.map(e => (
					<div className='skills__panel' key={`${e}-panel`}>
						<motion.div
							className='skills__panel__title'
							key={`${e}-title`}
							data-type={e}
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ duration: 3 }}
							viewport={{ once: true }}
						>
							{e}
						</motion.div>
						<IconList classname='skills' type={e} key={`${e}-icons`} />
					</div>
				))}
			</div>
		</div>
	);
};
