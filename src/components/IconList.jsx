import React from 'react';
import '../styles/IconList.css';
import { motion } from 'framer-motion';
import { SKILLS } from '../data/skills';

export const IconList = ({ classname, type }) => {
	const icons = SKILLS.filter(e => e.type.includes(type));

	const container = {
		hidden: {
			opacity: 0,
			scale: 0,
		},
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				duration: 0.5,
				delayChildren: 0.1,
				staggerChildren: 0.3,
			},
		},
	};

	const item = {
		hidden: { opacity: 0, scale: 0 },
		visible: { opacity: 1, scale: 1 },
	};

	return (
		<motion.article
			className={`${classname}__logo-panel`}
			variants={container}
			initial='hidden'
			whileInView='visible'
			viewport={{ once: true }}
		>
			{icons.map(({ name, Icon, color }) => (
				<motion.figure
					className={`${classname}__logo`}
					key={`figure-${name}`}
					variants={item}
					whileInView='visible'
					viewport={{ once: true }}
				>
					<Icon
						className={`logo__icon logo__${name}`}
						data-name={name}
						style={{
							backgroundColor: `hsla(${color}, 8%)`,
							color: `hsl(${color})`,
							boxShadow: `0px 1px 0px 0px hsla(${color}, 24%) inset`,
						}}
					/>
					<figcaption className={`${classname}__caption caption__${name}`}>
						{name}
					</figcaption>
				</motion.figure>
			))}
		</motion.article>
	);
};
