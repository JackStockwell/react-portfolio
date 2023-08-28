import React from 'react';
import Header from '../Header/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Socials({ page }) {
    
    const headingData = {
        title: "Socials",
        sub: "Come find out what I'm up to."
    }

    return (
        <>
            <Header page={page} header={headingData}></Header>
            <div className='content-wrap'>
                <div className='section'>
                    <section className='socials'>
                            <a className='social-a' href='https://github.com/JackStockwell'>
                                < FontAwesomeIcon className='social-i' icon="fa-brands fa-github" />
                                Github
                            </a>
                            <a className='social-a' href='https://github.com/JackStockwell'>
                                <FontAwesomeIcon className='social-i' icon="fa-brands fa-linkedin" />
                                linkedin
                            </a>
                            <a className='social-a' href='https://github.com/JackStockwell'>
                                <FontAwesomeIcon className='social-i' icon="fa-brands fa-github" />

                            </a>
                    </section>
                </div>
            </div>
        </>
    )
}