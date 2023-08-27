import React from 'react';
import Header from '../Header/index';
import Reveal from '../utils/Animation/Reveal';

export default function Home() {

    const headingData = {
        title: "Hi, I'm Jack Stockwell.",
        sub: "An aspiring Full-stack Developer, looking to break into the Web Development industry."
    }


    return (
        <>
            <Header page={"Home"} header={headingData}></Header>
            <div className='content-wrap'>
                <section className='section b-inline'>
                    <div className='max'>
                        <Reveal>
                            <h3>Welcome.</h3>
                            <p>
                                Based in South Essex, I am actively looking to start a Web Developemt career.
                                I attened a 6 month Full-stack Web Development Bootcamp with The University of Birmingham and
                                I am now looking to not only continue my journey and improve my knowledge & understanding but also start
                                begin my first Web Development job.
                            </p>
                        </Reveal>
                    </div>
                </section>
                <section className='section'>
                    <div className='max'>
                        <Reveal>
                            <h3>Skills</h3>
                            <div className=''>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque
                                    velit, lobortis ut magna varius, blandit rhoncus sem. Morbi lacinia nisi
                                    ac dui fermentum, sed luctus urna tincidunt. Etiam ut feugiat ex. Cras
                                    non risus mi. Curabitur mattis rutrum ipsum, ut aliquet urna imperdiet
                                    ac. Sed nec nulla aliquam, bibendum odio eget, vestibulum tortor. Cras
                                    rutrum ligula in tincidunt commodo. Morbi sit amet mollis orci, in
                                    tristique ex. Donec nec ornare elit. Donec blandit est sed risus feugiat
                                    porttitor. Vestibulum molestie hendrerit massa non consequat. Vestibulum
                                    vitae lorem tortor. In elementum ultricies tempus. Interdum et malesuada
                                    fames ac ante ipsum primis in faucibus. 
                                </p>                                
                            </div>
                        </Reveal>
                    </div>
                </section>
            </div>
        </>
    )
}