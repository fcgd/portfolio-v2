import React, { useContext, useEffect, useState } from 'react';
import '../styles/Contact.css';
import LanguageContext from '../context/LanguageContext';
import { useForm, ValidationError } from '@formspree/react';
import { AnimatePresence, motion } from 'framer-motion';

export const Contact = () => {
	const [state, handleSubmit] = useForm(import.meta.env.VITE_FORM);
	const [showMessage, setShowMessage] = useState(false);
	const { language } = useContext(LanguageContext);

	const form = document.getElementById('contact-form');

	useEffect(() => {
		if (state.succeeded === false) {
			return;
		} else {
			setShowMessage(true);
			form.reset();
		}
		const Timer = setTimeout(() => {
			setShowMessage(false);
		}, 5000);
		return () => clearTimeout(Timer);
	}, [state.succeeded]);

	return (
		<div className='section__contact' id='contact'>
			<div className='contact__map'>
				<iframe
					title='map'
					width='100%'
					height='100'
					frameBorder='0'
					scrolling='no'
					marginHeight='0'
					marginWidth='0'
					loading='lazy'
					allowFullScreen={true}
					noreferrerpolicy='no-referrer-when-downgrade'
					src='https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=-32.944465,-60.647482&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=0&amp;layer=0&amp;output=embed'
					style={{
						filter: 'grayscale(1) contrast(1.2) opacity(0.4)',
						height: '110vh',
						marginTop: '-150px',
					}}
				></iframe>
			</div>

			<h2 className='contact__h2'>
				{language === 'es' ? 'Contáctame' : 'Contact'}
			</h2>
			<form onSubmit={handleSubmit} id='contact-form'>
				<input
					id='email'
					type='email'
					name='email'
					placeholder={language === 'es' ? 'Correo electrónico' : 'Email'}
					required
				/>
				<ValidationError prefix='Email' field='email' errors={state.errors} />
				<input type='text' name='_gotcha' style={{ display: 'none' }} />
				<textarea
					id='message'
					name='message'
					placeholder={language === 'es' ? 'Mensaje' : 'Message'}
					required
				/>
				<ValidationError
					prefix='Message'
					field='message'
					errors={state.errors}
				/>
				<motion.button
					type='submit'
					disabled={state.submitting}
					whileTap={{ scale: 0.95 }}
					whileHover={{ scale: 1.03 }}
				>
					{language === 'es' ? 'Enviar' : 'Send'}
				</motion.button>
			</form>
			<AnimatePresence>
				{showMessage && (
					<div className='message__wrapper'>
						<motion.div
							className='contact__message-succeeded'
							initial={{ opacity: 0, y: 50 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
							viewport={{ once: true }}
							exit={{ opacity: 0, y: 50 }}
						>
							{language === 'es' ? (
								<p>
									Mensaje enviado con éxito! ✔ <br /> Me pondré en contacto
									contigo lo antes posible.{' '}
								</p>
							) : (
								<p>
									Message sent! ✔ <br /> I'll get back to you as soon as
									possible.
								</p>
							)}
						</motion.div>
					</div>
				)}
			</AnimatePresence>
		</div>
	);
};
