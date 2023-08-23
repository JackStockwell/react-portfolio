import React, { useState, useEffect } from 'react';
import '../styles/navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useMediaPredicate } from 'react-media-hook';


function Navbar({ currentPage, handlePageChange }) {
    
    const [ isNavBar, setIsNavBar ] = useState(false)

    const handleMinWidth = useMediaPredicate("(min-width: 60em)")

    return (
        <nav className='nav'>
            <div>
                <a href="/" className='title'>Jack Stockwell</a>
                { !handleMinWidth &&
                    <button
                        className='hamburger'
                        onClick={() => setIsNavBar(!isNavBar)}
                        >
                        <FontAwesomeIcon icon="fa-solid fa-bars" />
                    </button>               
                }
            </div>
            <ul className={ isNavBar || handleMinWidth ? 'nav-list' : 'hidden'}>
                <li>
                    <a
                        className={currentPage === 'Home' ? 'nav-a nav-active' : 'nav-a'}
                        href='#home'
                        onClick={handlePageChange}
                        ><FontAwesomeIcon icon="fa-solid fa-house" />Home
                    </a>
                </li>
                <li>
                    <a
                        className={currentPage === 'Projects' ? 'nav-a nav-active' : 'nav-a'}
                        href='#projects'
                        onClick={handlePageChange}
                        ><FontAwesomeIcon icon="fa-solid fa-heart" />Projects
                    </a>
                </li>
                <li>
                    <a
                        className={currentPage === 'Blog' ? 'nav-a nav-active' : 'nav-a'}
                        href='#blog'
                        onClick={handlePageChange}
                        >Blog
                    </a>
                </li>
                <li>
                    <a
                        className={currentPage === 'Socials' ? 'nav-a nav-active' : 'nav-a'}
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