import React, { useContext } from 'react';
import '../styles/Resume.css';
import { motion } from 'framer-motion';
import LanguageContext from '../context/LanguageContext';
import ResumePDF from '../../public/Fabricio Cesaretti Resume.pdf';

export const Resume = ({ className }) => {
	const { language } = useContext(LanguageContext);

	return (
		<div className={`resume-wrapper-${className}`}>
			<a
				href={ResumePDF}
				className='resume'
				target='_blank'
				rel='noopener noreferrer'
				title={`${language === 'es' ? 'Ver Curriculum' : 'Open Resume'}`}
			>
				CV
			</a>
			<a
				href={ResumePDF}
				className='resume-download-icon'
				title={`${
					language === 'es' ? 'Descargar Curriculum' : 'Download Resume'
				}`}
				download
			>
				<motion.svg
					version='1.1'
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 485 485'
					width={`${className === 'mobile' ? '48px' : '24px'}`}
					height={`${className === 'mobile' ? '48px' : '24px'}`}
					fill='white'
					overflow='visible'
					whileHover={{
						y: '-10%',
						transition: {
							duration: 0.5,
							ease: 'easeInOut',
							loop: Infinity,
							delay: 0.3,
							yoyo: true,
						},
					}}
				>
					<path
						d='M233,378.7c2.5,2.5,6,4,9.5,4s7-1.4,9.5-4l107.5-107.5c5.3-5.3,5.3-13.8,0-19.1c-5.3-5.3-13.8-5.3-19.1,0L256,336.5v-323
							C256,6,250,0,242.5,0S229,6,229,13.5v323l-84.4-84.4c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1L233,378.7z'
					/>
				</motion.svg>
			</a>
		</div>
	);
};
