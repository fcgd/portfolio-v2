import React from 'react';
import '../styles/Home.css';
import { motion } from 'framer-motion';
import { useRef } from 'react';

export const Home = ({ setShowReset }) => {
	const constraintsRef = useRef(null);

	const fabricio = ['F', 'a', 'b', 'r', 'i', 'c', 'i', 'o', ' '];
	const cesaretti = ['C', 'e', 's', 'a', 'r', 'e', 't', 't', 'i'];

	return (
		<div className='section__home' id='home'>
			<motion.div className='drag-area' ref={constraintsRef}>
				<ol className='name-wrapper'>
					{fabricio.map((letter, index) => {
						return (
							<motion.li
								drag
								dragConstraints={constraintsRef}
								key={index}
								whileTap={{
									scale: 1.05,
									textShadow: '0px 5px 8px #222',
									cursor: 'grabbing',
								}}
								whileDrag={{ scale: 1.1, textShadow: '0px 10px 16px #222' }}
								dragTransition={{
									min: 0,
									max: 100,
									power: 0.5,
								}}
								onDragStart={() => setShowReset(true)}
							>
								{letter}
							</motion.li>
						);
					})}
				</ol>
				<ol className='name-wrapper'>
					{cesaretti.map((letter, index) => {
						return (
							<motion.li
								drag
								dragConstraints={constraintsRef}
								key={index}
								whileTap={{
									scale: 1.05,
									textShadow: '0px 5px 8px #222',
									cursor: 'grabbing',
								}}
								whileDrag={{ scale: 1.1, textShadow: '0px 10px 16px #222' }}
								dragTransition={{
									min: 0,
									max: 100,
									power: 0.5,
								}}
								onDragStart={() => setShowReset(true)}
							>
								{letter}
							</motion.li>
						);
					})}
				</ol>
			</motion.div>
		</div>
	);
};
