// Imports
import React from 'react';
import Header from '../Header/index';
import Email from '../Email/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Socials({ page }) {
    
    // Data for heading component.
    const headingData = {
        title: "Contact Me",
        sub: "Get hold of me, view my CV or find out what I'm up to!"
    }

    // Used to download the resume, on click the PDF is downloaded.
    const resumeDownload = () => {

        const file = 'Jack Stockwell CV 2023.pdf'

        let confirmDownload = window.confirm(`Are sure you want to download "${file}"?`)

        if (confirmDownload) {
            fetch(file)
            .then(res => {
                res.blob()
                    .then(blob => {
                        const fileURL = window.URL.createObjectURL(blob)
                        let alink = document.createElement('a');
                        alink.href = fileURL;
                        alink.download = 'PDF Jack Stockwell CV 2023.pdf'
                        alink.click();
                        return;
                    })
            })
        }
        return;
    }

    return (
        <>
            <Header page={page} header={headingData}></Header>
            <div className='content-wrap'> 
                <section className='section'>
                    <div className='max'>
                        <h3 className='h'>Links</h3>
                        <section className='socials'>
                            <a className='social-a' target='_blank' rel='noreferrer' href='https://github.com/JackStockwell'>
                                < FontAwesomeIcon className='social-i' icon="fa-brands fa-github" />
                                Github
                            </a>
                            <a className='social-a' target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/jack-stockwell-b69737261/'>
                                <FontAwesomeIcon className='social-i' icon="fa-brands fa-linkedin" />
                                Linkedin
                            </a>
                            <button className='social-a' onClick={resumeDownload}>
                                <FontAwesomeIcon className='social-i' icon="fa-solid fa-file" />
                                Résumé
                            </button>
                        </section>
                    </div>
                </section>
                <section className='section'>
                    <div className='max'>
                        <h3 className='h'>Send me an email.</h3>
                        {/* Email component */}
                        <Email />
                    </div>
                </section>

            </div>
        </>
    )
}