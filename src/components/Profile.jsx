import React, { useContext } from 'react';
import '../styles/Profile.css';
import LanguageContext from '../context/LanguageContext';

export const Profile = () => {
	const { language } = useContext(LanguageContext);

	return (
		<div className='section__profile' id='profile'>
			<div className='profile__description'>
				{language === 'es' ? (
					<p>
						Hola! ✋ Soy <strong>PROGRAMADOR WEB</strong> especializado en
						frontend. Principalmente uso React, pero me adapto bien y conozco
						las tecnologías utilizadas en el desarrollo web moderno.
					</p>
				) : (
					<p>
						Hi! ✋ I am a <strong>WEB DEVELOPER</strong> specialized in the
						frontend. I mainly use React, but I adapt well and I know the
						technologies used in modern web development.
					</p>
				)}
			</div>
			<div className='profile__buttons'>
				<a
					href='#contact'
					className='contact-btn'
					title={`${language === 'es' ? 'Contactame' : 'Contact me'}`}
				>
					{language === 'es' ? 'Contactame' : 'Contact me'}
				</a>
				<a
					href='https://drive.google.com/file/d/1iZ9yELbn92RxN__WREwaHQP3fK28LXUq/'
					className='cv-btn'
					title={`${
						language === 'es' ? 'Descargar Curriculum' : 'Download Resume'
					}`}
					download
				>
					{language === 'es' ? 'Descargar CV' : 'Download CV'}
				</a>
			</div>
		</div>
	);
};
