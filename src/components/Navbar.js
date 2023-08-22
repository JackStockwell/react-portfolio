import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Navbar({ currentPage, handlePageChange }) {
    return (
        <nav className='nav'>
            <a href="/" className='title'>Jack Stockwell</a>
            <ul>
                <li>
                    <a
                        href='#home'
                        onClick={handlePageChange}
                        ><FontAwesomeIcon icon="fa-solid fa-house" />Home
                    </a>
                </li>
                <li>
                    <a
                        href='#projects'
                        onClick={handlePageChange}
                        ><FontAwesomeIcon icon="fa-solid fa-heart" />Projects
                    </a>
                </li>
                <li>
                    <a
                        href='#blog'
                        onClick={handlePageChange}
                        >Blog
                    </a>
                </li>
                <li>
                    <a
                        href='#socials'
                        onClick={handlePageChange}
                        ><FontAwesomeIcon icon="fa-solid fa-circle-user" />Socials
                    </a>
                </li>
            </ul>
        </nav>
    )
}


export default Navbar;