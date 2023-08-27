import React, { useState } from 'react';
import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useMediaPredicate } from 'react-media-hook';
import { Link, useLocation } from 'react-router-dom';


function Navbar() {
    
    const [ isNavBar, setIsNavBar ] = useState(false)

    const currentPage = useLocation().pathname

    const handleMinWidth = useMediaPredicate("(min-width: 60em)")

    return (
        <nav className='nav'>
            <div>
                <Link to='/' >
                    Jack Stockwell
                </Link>
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
                <li className='underline-a'>
                    <Link
                        to='/'
                        className={currentPage === '/' ? 'nav-a nav-active' : 'nav-a'}
                    >
                        <FontAwesomeIcon className='icon' icon="fa-solid fa-house" />
                        <span className='icon-span'>Home</span>
                    </Link>
                </li>
                <li className='underline-a'>
                    <Link 
                        to='/projects'
                        className={currentPage === '/projects' ? 'nav-a nav-active' : 'nav-a'}
                    >
                        <FontAwesomeIcon className='icon' icon="fa-solid fa-heart" />
                        <span className='icon-span'>Projects</span>
                    </Link>

                </li>
                <li className='underline-a'>
                    <Link 
                        to='/socials'
                        className={currentPage === '/socials' ? 'nav-a nav-active' : 'nav-a'}
                    >
                        <FontAwesomeIcon className='icon' icon="fa-solid fa-circle-user" />
                        <span className='icon-span'>Socials</span>
                    </Link>
                </li>
            </ul>

        </nav>
    )
}


export default Navbar;