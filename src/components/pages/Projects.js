// Imprts
import React from 'react';
import Header from '../Header/index';
import Reveal from '../utils/Animation/Reveal';
import '../../styles/projects.css'

// Projects import used to display the list of projects.
import Projects from "../Project/index"

export default function Project({ page }) {
    
    // Sets parses the heading data into the header to be used.
    const headingData = {
        title: "My Projects",
        sub: "My latest works, all on display."
    }

    return (
        <>
            <Header page={page} header={headingData}></Header>
            <div className='content-wrap'>
                <section className='section'>
                    <div className='max'>
                        <Reveal>
                            <h3 style={{textAlign: "center", fontSize: "3ch"}}>My Repo's and deployed links.</h3>
                        </Reveal>
                    </div>
                </section>
                <section className='section b-inline'>
                    <div style={{margin: "auto", maxWidth: "100em"}}>
                        <section className='projects'>
                            <Projects />
                        </section>
                    </div>
                </section>
            </div>
        </>
    )
}