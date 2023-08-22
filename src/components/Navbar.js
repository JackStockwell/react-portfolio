import React from 'react';

function Navbar({ currentPage, handlePageChange }) {
    return (
        <nav className='nav'>
            <a href="/" className='title'>Jack Stockwell</a>
            <ul>
                <li>
                    <a
                        href='#home'
                        onClick={handlePageChange}
                        >Home
                    </a>
                </li>
                <li>
                    <a
                        href='#projects'
                        onClick={handlePageChange}
                        >Projects
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
                        >Socials
                    </a>
                </li>
            </ul>
        </nav>
    )
}


export default Navbar;