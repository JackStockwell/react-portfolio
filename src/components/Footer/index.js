import React from "react";
import "../../styles/styles.css"
import "./footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer({}) {

    return (
        <footer>
            <section className="section">
                <div className='footer-wrapper max'>
                    <h5>Made by Jack Stockwell</h5>
                    <div className="socials">
                        <a data-icon-link href='https://github.com/JackStockwell'>
                            < FontAwesomeIcon className='f-icon' icon="fa-brands fa-github" />
                            Github
                        </a>
                        <a data-icon-link href='https://github.com/JackStockwell'>
                            <FontAwesomeIcon className='f-icon' icon="fa-brands fa-linkedin" />
                            Linkedin
                        </a>
                    </div>
                </div>
            </section>
        </footer>
    )
}