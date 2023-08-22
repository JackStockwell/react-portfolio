import React from 'react';

function Navbar({ handlePageChange }) {
    return (
        <nav>
            <ul>
                <li>
                    <a>Home
                    </a>
                </li>
                <li>
                    <a
                        onClick={handlePageChange}
                    >Projects
                    </a>
                </li>
                <li>
                    <a
                        href='#blog'
                        
                    >Blog
                    </a>
                </li>
                <li>
                    <a
                    >Socials
                    </a>
                </li>
            </ul>
        </nav>
    )
}


export default Navbar;