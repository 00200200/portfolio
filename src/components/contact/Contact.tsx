import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdContentCopy } from 'react-icons/md';
import './Contact.css';
const Contact: React.FC = () => {
	const handleCopyEmail = () => {
		const eMail = 'mchfrg@gmail.com';
		navigator.clipboard
			.writeText(eMail)
			.then(() => {
				console.log('Adres e-mail został skopiowany!');
			})
			.catch(error => {
				console.error('Błąd podczas kopiowania adresu e-mail:', error);
			});
	};

	return (
		<section id='contact' className='contactContainer'>
			<div className='contact-header'>
				<h3>CONTACT</h3>
			</div>
			<div className='contact-section'>
				<h4>Feel free to contact me</h4>
				<div className='contact-buttons'>
					<a href='mailto:mchfrg@gmail.com' target='_blank' rel='noopener noreferrer' className='button email'>
						<FaEnvelope className='button-icon' />
						E-mail
					</a>
					<a href='https://github.com/00200200' target='_blank' rel='noopener noreferrer' className='button github'>
						<FaGithub className='button-icon' />
						GitHub
					</a>
					<a
						href='https://www.linkedin.com/in/micha%C5%82-furga%C5%82a/'
						target='_blank'
						rel='noopener noreferrer'
						className='button linkedin'>
						<FaLinkedin className='button-icon' />
						LinkedIn
					</a>

					<button className='button' onClick={handleCopyEmail}>
						<MdContentCopy className='button-icon' />
						E-Mail
					</button>
				</div>
			</div>
		</section>
	);
};

export default Contact;
