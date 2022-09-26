import React, { useEffect, useState } from 'react';
import '../styles/Navbar.css';
import { motion, useCycle } from 'framer-motion';
import { MenuToggle } from './MenuToggle';
import { Navigation } from './Navigation';

const InitialState = innerWidth < 600 ? true : false;

const sidebar = {
	open: (height = 1000) => ({
		clipPath: `circle(${height * 2 + 200}px at 100% 100%)`,
		transition: {
			type: 'spring',
			stiffness: 20,
			restDelta: 2,
		},
	}),
	closed: {
		clipPath: 'circle(0px at 100% 0px)',
		transition: {
			delay: 0.5,
			type: 'spring',
			stiffness: 400,
			damping: 40,
		},
	},
};

export const Navbar = () => {
	const [isMobile, setIsMobile] = useState(InitialState);
	const [isOpen, toggleOpen] = useCycle(false, true);

	const handleResize = () => {
		if (window.innerWidth < 600) {
			setIsMobile(true);
		} else {
			setIsMobile(false);
		}
	};

	window.addEventListener('resize', handleResize);

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
			document
				.getElementsByClassName('menu')[0]
				.setAttribute('style', 'z-index: 200');
		} else {
			setTimeout(() => {
				document.body.style.overflow = 'auto';
				document
					.getElementsByClassName('menu')[0]
					.setAttribute('style', 'z-index: -1');
			}, 1000);
		}
		return () => clearTimeout();
	}, [isOpen]);

	return !isMobile ? (
		<Navigation className='desktop'></Navigation>
	) : (
		<>
			<motion.div
				className='menu'
				initial={false}
				animate={isOpen ? 'open' : 'closed'}
				custom='100%'
			>
				<motion.div className='navbar' variants={sidebar} />
				<Navigation
					className='mobile'
					handleClick={() => toggleOpen()}
					isOpen={isOpen}
				></Navigation>
			</motion.div>
			<MenuToggle isOpen={isOpen} toggle={() => toggleOpen()} />
		</>
	);
};
