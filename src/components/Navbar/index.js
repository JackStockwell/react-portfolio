// Imports
import React, { useState } from 'react';
import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useMediaPredicate } from 'react-media-hook';
import { Link, useLocation } from 'react-router-dom';


function Navbar() {

    // Toggle for if the navBar is showing or not. If false it is hidden from view.
    const [ isNavBarActive, setIsNavBar ] = useState(false)

    // Finds current page using react router by taking the pathname. Used to set the active CSS class on the links.
    const currentPage = useLocation().pathname

    // Uses media-hook to find if the min width is true or false, if false goes to mobile mode. If true Desktop mode.
    const handleMinWidth = useMediaPredicate("(min-width: 60em)")

    return (
        <nav className='nav'>
            <div className='title'>
                <Link to='/' className='spread' >
                    <h1>Jack Stockwell</h1>
                </Link>
                {/* If the page's min width is below 60em then the navBar collapses and the hamburger icon appears */}
                { !handleMinWidth &&
                    <button
                        className='hamburger'
                        onClick={() => setIsNavBar(!isNavBarActive)}
                        >
                        {isNavBarActive ? <FontAwesomeIcon className='hbicon' icon="fa-solid fa-x" /> : <FontAwesomeIcon className='hbicon' icon="fa-solid fa-bars" />}
                    </button>               
                }
            </div>
            {/* Checks to see if the isNavBar is active, if so opens the drop list. handleMinWidth is there to stop it disappearing if isNavBar is false, it will show always show on desktop mode to stop the bar disappearing */}
            <ul className={ isNavBarActive || handleMinWidth ? 'nav-list' : 'hidden'}>
                <li className='underline-a'>
                    <Link
                        to='/'
                        // Check to see if nav is currentPage
                        className={currentPage === '/' ? 'nav-a nav-active' : 'nav-a'}
                    >
                        <FontAwesomeIcon className='icon' icon="fa-solid fa-house" />
                        <span className='icon-span'>Home</span>
                    </Link>
                </li>
                <li className='underline-a'>
                    <Link 
                        to='/projects'
                        // Check to see if nav is currentPage
                        className={currentPage === '/projects' ? 'nav-a nav-active' : 'nav-a'}
                    >
                        <FontAwesomeIcon className='icon' icon="fa-solid fa-heart" />
                        <span className='icon-span'>Projects</span>
                    </Link>

                </li>
                <li className='underline-a'>
                    <Link 
                        to='/socials'
                        // Check to see if nav is currentPage
                        className={currentPage === '/socials' ? 'nav-a nav-active' : 'nav-a'}
                    >
                        <FontAwesomeIcon className='icon' icon="fa-solid fa-circle-user" />
                        <span className='icon-span'>Contact</span>
                    </Link>
                </li>
            </ul>

        </nav>
    )
}


export default Navbar;