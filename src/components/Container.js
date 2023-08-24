import React, { useState } from "react";
import Navbar from "./Navbar/index";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Socials from "./pages/Socials";

export default function Container() {

    const [ page, setPage ] = useState('Home')

    const renderPage = () => {
        switch (page) {
            case 'Home':
                return <Home page={page}/>
            case 'Projects':
                return <Projects page={page}/>
            case 'Socials':
                return <Socials page={page}/>
            default:
                break;
        }
    }

    const handlePageChange = (e) => {
        // Sets the page to the parsed value from the event.
        setPage(e.target.text)
    }

    return (
        <main>
            <Navbar currentPage={page} handlePageChange={handlePageChange}/>
            {renderPage()}
        </main>
    )
}