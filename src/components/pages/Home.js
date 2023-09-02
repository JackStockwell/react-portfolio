// Imports
import React from 'react';
import Header from '../Header/index';
import Reveal from '../utils/Animation/Reveal';

export default function Home() {

    // Data for header component
    const headingData = {
        title: "Hi, I'm Jack Stockwell.",
        sub: "An aspiring Full Stack Developer, looking to break into the Web Development industry."
    }

    return (
        <>
            <Header page={"Home"} header={headingData}></Header>
            <div className='content-wrap'>
                <section className='section b-inline'>
                    <div className='max'>
                        <Reveal>
                            <h3 className='h'>Welcome.</h3>
                            <p>
                                Based in South Essex, I am actively looking to start a Web Development career.
                                I attended a 6 month Full-stack Web Development Bootcamp with The University of Birmingham and
                                I am now looking to not only continue my journey and improve my knowledge & understanding, but also looking to start my first Web Development job.
                            </p>
                        </Reveal>
                    </div>
                </section>
                <section className='section'>
                    <div className='max'>
                        <Reveal>
                            <h3 className='h'>Skills</h3>
                            <ul className='skills'>
                                <li>MySQL & Sequelize</li>
                                <li>React</li>
                                <li>MongoDB & Mongoose</li>
                                <li>RESTFul API & Express</li>
                                <li>Node</li>
                                <li>JavaScript / CSS / HTML</li>
                            </ul>
                        </Reveal>
                    </div>
                </section>
            </div>
        </>
    )
}