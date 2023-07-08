import React from 'react';
// import cvEng from './cv/cv_eng.pdf';
import './Contact.css';

const Contact: React.FC = () => {
	const handleDownloadCV = () => {
		// window.open(cvEng, '_blank');
	};
	const handleCopyEmail = () => {
		const eMail = 'mchfrg@gmail.com';
		navigator.clipboard
			.writeText(eMail)
			.then(() => {
				// Pomyślnie skopiowano adres e-mail do schowka
				console.log('Adres e-mail został skopiowany!');
			})
			.catch(error => {
				// Wystąpił błąd podczas kopiowania adresu e-mail
				console.error('Błąd podczas kopiowania adresu e-mail:', error);
			});
	};

	return (
		<section id='contact' className='contact-section'>
			<h2>Contact</h2>

			<div className='contact-buttons'>
				{/* <a href='https://discord.com/' target='_blank' rel='noopener noreferrer' className='contact-button discord'>
					Discord
				</a> */}
				<a href='mailto:mchfrg@gmail.com' target='_blank' rel='noopener noreferrer' className='contact-button email'>
					E-mail
				</a>
				<a
					href='https://github.com/00200200'
					target='_blank'
					rel='noopener noreferrer'
					className='contact-button github'>
					GitHub
				</a>
				<a
					href='https://www.linkedin.com/in/micha%C5%82-furga%C5%82a/'
					target='_blank'
					rel='noopener noreferrer'
					className='contact-button linkedin'>
					LinkedIn
				</a>
				<button className='contact-button linkedin' onClick={handleDownloadCV}>
					CV [ENG]
				</button>
				<button className='contact-button' onClick={handleCopyEmail}>
					Copy E-Mail
				</button>
			</div>
		</section>
	);
};

export default Contact;
