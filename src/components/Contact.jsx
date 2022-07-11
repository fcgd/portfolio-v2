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
