import React, { useState } from 'react';
import Header from '../Header/index';
import Email from '../Email/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Socials({ page }) {
    
    const headingData = {
        title: "Contact Me",
        sub: "Get hold of me, view my CV or find out what I'm up to!"
    }

    return (
        <>
            <Header page={page} header={headingData}></Header>
            <div className='content-wrap'> 
                <section className='section'>
                    <h3 className='h'>Links</h3>
                    <section className='socials'>
                        <a className='social-a' target='_blank' href='https://github.com/JackStockwell'>
                            < FontAwesomeIcon className='social-i' icon="fa-brands fa-github" />
                            Github
                        </a>
                        <a className='social-a' target='_blank' href='https://www.linkedin.com/in/jack-stockwell-b69737261/'>
                            <FontAwesomeIcon className='social-i' icon="fa-brands fa-linkedin" />
                            Linkedin
                        </a>
                        <a className='social-a' href='https://docs.google.com/document/d/1gZQVUjFqlvZbJ74_GRsDjJ8_jjuSiBojro27ZDF1TuA/edit?usp=sharing'>
                            <FontAwesomeIcon className='social-i' icon="fa-solid fa-file" />
                            Resume
                        </a>
                    </section>
                    <Email />
                </section>
            </div>
        </>
    )
}