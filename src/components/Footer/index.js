import React from "react";
import "../../styles/styles.css"
import "./footer.css"

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer() {

    return (
        <footer>
            <section className="section">
                <div className='footer-wrapper max'>
                    <h5 data-order-1>Made by Jack Stockwell</h5>
                    <div className="socials">
                        <a data-icon-link href='https://github.com/JackStockwell'>
                            < FontAwesomeIcon className='f-icon' icon="fa-brands fa-github" />
                            Github
                        </a>
                        <a data-icon-link href='https://www.linkedin.com/in/jack-stockwell-b69737261/'>
                            <FontAwesomeIcon className='f-icon' icon="fa-brands fa-linkedin" />
                            Linkedin
                        </a>
                        <Link data-icon-link to='/socials'>
                            <FontAwesomeIcon className='f-icon' icon="fa-solid fa-envelope" />
                            E-Mail
                        </Link>
                    </div>
                </div>
            </section>
        </footer>
    )
}