import React, { useContext, useEffect, useState } from 'react';
import LanguageContext from '../context/LanguageContext';
import { motion } from 'framer-motion';

export const ThemeToggler = () => {
	const { language } = useContext(LanguageContext);
	const [theme, setTheme] = useState('dark');
	const nextTheme = theme === 'light' ? 'dark' : 'light';

	useEffect(() => {
		document.body.dataset.theme = theme;
	}, [theme]);

	return (
		<button
			title={`${
				language === 'es'
					? `Cambiar a ${nextTheme} mode`
					: `Change to ${nextTheme} mode`
			}`}
			className='theme-toggler'
			onClick={() => setTheme(nextTheme)}
		>
			{theme === 'light' ? (
				<motion.svg
					xmlns='http://www.w3.org/2000/svg'
					width='32px'
					height='32px'
					viewBox='0 0 650 480'
				>
					<g>
						<g>
							<motion.path
								d='M467.6,309.093c-2.6-2.8-6.6-3.9-10.3-2.8c-19.2,5.8-40.8,8.8-62.6,8.8c-123.1,0-223.2-98.3-223.2-219.1
                  c0-26.8,5.1-53.8,15.7-82.4c1.3-3.6,0.5-7.5-2.1-10.3c-2.6-2.8-6.5-3.8-10.1-2.8c-50.8,14.7-94.5,44.5-126.3,86.4
                  c-31.9,41.9-48.7,91.7-48.7,144.1c0,131.8,109.5,239.1,244.2,239.1v0c48.7,0,95.7-14.2,136.3-41.2c40.4-27,71.2-64.8,89-109.3
                  C470.9,315.993,470.2,311.893,467.6,309.093z M244.2,450.093c-123.6,0-224.2-98.3-224.2-219.1c0-90.6,57.4-172.3,141.9-205
                  c-7.1,23.8-10.5,46.9-10.6,70c0,64,25.3,124.1,71.3,169.2c45.9,45.1,106.9,69.9,171.9,69.9c16.3,0,32.5-1.6,47.8-4.6
                  C405,402.793,327.8,450.093,244.2,450.093z'
								fill='black'
								initial={{
									opacity: 0,
									rotate: -180,
									pathLength: 0,
								}}
								animate={{
									opacity: 1,
									rotate: 0,
									pathLength: 1,
								}}
								transition={{
									duration: 1,
									type: 'spring',
									stiffness: 200,
									damping: 10,
									delay: 0.2,
								}}
							/>
						</g>
					</g>
				</motion.svg>
			) : (
				<motion.svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					width='32px'
					height='32px'
				>
					<motion.path
						stroke='white'
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={1.2}
						d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
						initial={{
							opacity: 0,
							rotate: -90,
							pathLength: 0,
						}}
						animate={{
							opacity: 1,
							rotate: 0,
							pathLength: 1,
						}}
						transition={{
							duration: 1,
							type: 'spring',
							stiffness: 200,
							damping: 10,
							delay: 0.2,
						}}
					/>
				</motion.svg>
			)}
		</button>
	);
};
