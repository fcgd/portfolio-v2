import React, { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import { data } from '../data/navigation';
import LanguageContext from '../context/LanguageContext';

const variants = {
	open: {
		transition: {
			staggerChildren: 0.07,
			delayChildren: 0.2,
			staggerDirection: 1,
		},
	},
	closed: {
		transition: {
			staggerChildren: 0.05,
		},
	},
};
const item = {
	open: {
		y: 0,
		opacity: 1,
		transition: {
			y: { stiffness: 1000, velocity: -100 },
		},
	},
	closed: {
		y: -100,
		opacity: 0,
		transition: {
			y: { stiffness: 1000 },
		},
	},
};

export const Navigation = ({ className, handleClick, children, isOpen }) => {
	const [activeIndex, setActiveIndex] = useState(null);
	return (
		<nav className={`nav__${className}`}>
			<motion.ul
				onHoverEnd={() => setActiveIndex(null)}
				className={`nav__pages-${className}`}
				variants={variants}
			>
				{data.map(({ label, path }, index) => {
					const isActive = activeIndex === index;
					const { language } = useContext(LanguageContext);

					return (
						<motion.li
							key={index}
							onHoverStart={
								className === 'desktop' ? () => setActiveIndex(index) : null
							}
							className={`nav__item-${className}`}
							variants={item}
							onClick={handleClick}
							whileHover={className === 'mobile' && { scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
						>
							<motion.a href={path} className={`nav__link-${className}`}>
								{isActive && className === 'desktop' ? (
									<motion.div
										layoutId='underline'
										className='underline'
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										exit={{ opacity: 0 }}
									/>
								) : null}
								<span>{label[language]}</span>
							</motion.a>
						</motion.li>
					);
				})}
				<motion.div variants={item}>{children}</motion.div>
			</motion.ul>
		</nav>
	);
};
