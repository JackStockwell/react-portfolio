import React, { useState } from 'react';
import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useMediaPredicate } from 'react-media-hook';
import { Link } from 'react-router-dom';


function Navbar() {
    
    const [ currentPage, setPage ] = useState('Home')
    const [ isNavBar, setIsNavBar ] = useState(false)

    const handleMinWidth = useMediaPredicate("(min-width: 60em)")

    return (
        <nav className='nav'>
            <div>
                <Link
                    to='/'
                    onClick={() => setPage('Home')} >
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
                <li>
                    <Link
                        to='/'
                        className={currentPage === 'Home' ? 'nav-a nav-active' : 'nav-a'}
                        onClick={() => setPage('Home')} >
                        <FontAwesomeIcon icon="fa-solid fa-house" />Home
                    </Link>
                </li>
                <li>
                    <Link 
                        to='/projects'
                        className={currentPage === 'Projects' ? 'nav-a nav-active' : 'nav-a'}
                        onClick={() => setPage('Projects')}>
                        <FontAwesomeIcon icon="fa-solid fa-heart" />Projects
                    </Link>

                </li>
                <li>
                    {/* <a
                        className={currentPage === 'Blog' ? 'nav-a nav-active' : 'nav-a'}
                        href='#blog'
                        onClick={handlePageChange}
                        >Blog
                    </a> */}
                    <Link 
                        to='/socials'
                        className={currentPage === 'Socials' ? 'nav-a nav-active' : 'nav-a'}
                        onClick={() => setPage('Socials')}>
                        <FontAwesomeIcon icon="fa-solid fa-circle-user" />Socials
                    </Link>
                </li>
            </ul>

        </nav>
    )
}


export default Navbar;