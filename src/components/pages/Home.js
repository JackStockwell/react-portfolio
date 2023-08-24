import React from 'react';
import Header from '../Header/index';

export default function Home({ page }) {

    const headingData = {
        title: "Hi, I'm Jack Stockwell",
        sub: "An aspiring Full-stack Developer, looking to break into the Web Development industry."
    }

    return (
        <>
            <Header page={page} header={headingData}></Header>
            <div className='content-wrap'>
                <section className='section b-inline'>
                    <div>
                        <h3>About me</h3>
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
                </section>
                <section className='section'>
                    <div>
                        <h3>Skills</h3>
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
                </section>
            </div>
        </>
    )
}