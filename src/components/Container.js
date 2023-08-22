import React, { useState } from "react";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

export default function Container() {



    const [ page, setPage ] = useState('Home')

    const renderPage = () => {
        switch (page) {
            case 'Home':
                return <Home />
            case 'Projects':
                return <Projects />
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