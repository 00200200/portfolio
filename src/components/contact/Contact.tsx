import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdFileDownload, MdContentCopy } from 'react-icons/md';

import './Contact.css';

const Contact: React.FC = () => {
	const handleDownloadCV = () => {
		// window.open(CV, '_blank');
	};

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
		<section id='contact' className='contact-section'>
			<h2>Contact</h2>

			<div className='contact-buttons'>
				{/* <a href='https://discord.com/' target='_blank' rel='noopener noreferrer' className='button discord'>
          Discord
        </a> */}
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
				<button className='button linkedin' onClick={handleDownloadCV}>
					<MdFileDownload className='button-icon' />
					CV [PL]
				</button>
				<button className='button' onClick={handleCopyEmail}>
					<MdContentCopy className='button-icon' />
					E-Mail
				</button>
			</div>
		</section>
	);
};

export default Contact;
