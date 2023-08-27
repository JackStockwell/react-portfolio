import React from 'react';
import Header from '../Header/index';
import Reveal from '../utils/Animation/Reveal';


export default function Project({ page }) {
    
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
                            <h1>Test</h1>
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
                        </Reveal>
                    </div>
                </section>
                <section className='section b-inline'>
                    <div className='max'>
                        <section className='projects'>
                            <section>
                                <div>
                                    <h3>Project 1</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque
                                        velit, lobortis ut magna varius, blandit rhoncus sem. Morbi lacinia nisi
                                        ac dui fermentum, sed luctus urna tincidunt.
                                    </p> 
                                </div>
                                <img className='p-img' src='https://placehold.co/600x388' />
                            </section>
                            <hr></hr>
                            <section>
                                <div>
                                    <p>                                  
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque
                                        velit, lobortis ut magna varius, blandit rhoncus sem. Morbi lacinia nisi
                                        ac dui fermentum, sed luctus urna tincidunt.
                                    </p>
                                    <h3>Project 2</h3>    
                                </div>                            
                            </section>
                        </section>
                    </div>
                </section>
            </div>
        </>
    )
}