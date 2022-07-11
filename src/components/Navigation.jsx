import React, { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import { data } from '../data/navigation';
import LanguageContext from '../context/LanguageContext';

const variants = {
	open: {
		transition: { staggerChildren: 0.07, delayChildren: 0.2 },
	},
	closed: {
		transition: { staggerChildren: 0.05, staggerDirection: -1 },
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
		y: -50,
		opacity: 0,
		transition: {
			y: { stiffness: 1000 },
		},
	},
};

export const Navigation = ({ className, handleClick, children, isOpen }) => {
	const [activeIndex, setActiveIndex] = useState(null);
	return (
		<nav
			className={`nav__${className}`}
			style={{
				display: `${!isOpen && className === 'mobile' ? 'none' : 'flex'}`,
			}}
		>
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
						>
							<motion.a
								href={path}
								className={`nav__link-${className}`}
								whileTap={{ scale: `${className === 'mobile' ? '0.95' : '1'}` }}
								whileHover={{
									scale: `${className === 'mobile' ? '1.1' : '1'}`,
									transition: {
										duration: 2,
										ease: 'easeInOut',
									},
								}}
								onClick={handleClick}
							>
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
