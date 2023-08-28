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
                            <h2>GitHub Repos</h2>
                        </Reveal>
                    </div>
                </section>
                <section className='section b-inline'>
                    <div className='max'>
                        <section className='projects'>
                            <Reveal>
                            <section>
                                <div className='p-content'>
                                    <h3>Bundl</h3> 
                                    <p>
                                        Bundl is an innovative online platform that fosters connections through shared interests and stimulating discussions.
                                        Users are able to create profiles, post to their favourite communities and even creat their own!
                                    </p>
                                    <br></br>
                                    <p>
                                        Bundl was team made during my time at University, it involed various technologies such as: node and NPM packages such as express, mySQL and sequelize; handlebars, multer
                                        along with others, all wrapped with interactive Front-end.
                                    </p>
                                </div>
                                <div className='card'>
                                    <a className='card-link' href='https://github.com/JackStockwell/bundl' target='_blank'>
                                        <img className='p-img' src='https://github.com/JackStockwell/bundl/blob/main/public/assets/imgs/bundl-title.jpeg?raw=true' />  
                                        <span className='overlay'>Bundl</span>
                                    </a> 
                                </div>
                            </section>
                            </Reveal>
                            <hr className='hr-gradient'></hr>
                            <Reveal>
                            <section>
                                <div className='p-content reverse-order'>
                                    <h3>React Portfolio</h3> 
                                    <p>
                                        My first React project. And you're on it! This was my first real experience using React and I learnt many things regarding it.
                                        Made to display my works and what I am capable of. It will be continuously updated throughout my career. 
                                    </p>
                                    <br></br>
                                    <p>
                                        
                                    </p>
                                </div>
                                <div className='p-img'>
                                    <a href='https://github.com/JackStockwell/react-portfolio' target='_blank'>
                                        <img className='p-img' src='https://github.com/JackStockwell/bundl/blob/main/public/assets/imgs/bundl-title.jpeg?raw=true' />  
                                    </a> 
                                </div>                           
                            </section>
                            </Reveal>
                            <hr className='hr-gradient'></hr>
                            <Reveal>
                            <section>
                                <div className='p-content'>
                                    <h3>React Portfolio</h3> 
                                    <p>
                                        Bundl is an innovative online platform that fosters connections through shared interests and stimulating discussions.
                                        Users are able to create profiles, post to their favourite communities and even creat their own!
                                    </p>
                                    <br></br>
                                    <p>
                                        Bundl was team made during my time at University, it involed various technologies such as: node and NPM packages such as express, mySQL and sequelize; handlebars, multer
                                        along with others, all wrapped with interactive Front-end.
                                    </p>
                                </div>
                                <div className='p-img'>
                                    <a href='https://github.com/JackStockwell/react-portfolio' target='_blank'>
                                        <img className='p-img' src='https://github.com/JackStockwell/bundl/blob/main/public/assets/imgs/bundl-title.jpeg?raw=true' />  
                                    </a> 
                                </div>                           
                            </section>
                            </Reveal>
                        </section>
                    </div>
                </section>
            </div>
        </>
    )
}