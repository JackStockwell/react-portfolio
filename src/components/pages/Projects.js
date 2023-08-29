import React from 'react';
import Header from '../Header/index';
import Reveal from '../utils/Animation/Reveal';
import '../../styles/projects.css'


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
                            <h3 style={{textAlign: "center", fontSize: "3ch"}}>My Repo's and deployed links.</h3>
                        </Reveal>
                    </div>
                </section>
                <section className='section b-inline'>
                    <div style={{margin: "auto", maxWidth: "100em"}}>
                        <section className='projects'>
                            <Reveal>
                                <div className='card'>
                                    <img className='p-img' alt='Bundl logo' src='https://github.com/JackStockwell/bundl/blob/main/public/assets/imgs/bundl-title.jpeg?raw=true' />  
                                    <div className='overlay'>
                                        <div>
                                            <h4>Bundl</h4>
                                            <i>A recapture at something brilliant.</i>
                                        </div>
                                        <div className='card-link'>
                                            <a className='a-button' target='_blank' href='https://github.com/JackStockwell/bundl'>Repo</a>
                                            <a className='a-button' target='_blank' href='https://bundl-2a246e325746.herokuapp.com/'>Live</a>
                                        </div>
                                    </div>           
                                </div>
                            </Reveal>
                            <Reveal>
                                <div className='card'>
                                    <img className='p-img' alt='GIF of shout blog being used' src='https://raw.githubusercontent.com/JackStockwell/shout./main/public/assets/screenshots/chrome_Cdst1OYYjn.gif' />  
                                    <div className='overlay'>
                                        <div>
                                            <h4>Shout.</h4>
                                            <i>You'll hear what it's all about.</i>
                                        </div>
                                        <div className='card-link'>
                                            <a className='a-button' target='_blank' href='https://github.com/JackStockwell/shout.'>Repo</a>
                                            <a className='a-button' target='_blank' href='https://shout-blog-2ca8a82d114a.herokuapp.com/login'>Live</a>
                                        </div>
                                    </div>           
                                </div>
                            </Reveal>
                            <Reveal>
                                <div className='card'>
                                    <img className='p-img' alt='Social media API in action in postman' src='https://github.com/JackStockwell/social-media-api/raw/main/screencap.gif' />  
                                    <div className='overlay'>
                                        <div>
                                            <h4>Social Media API</h4>
                                            <i>A crack at MongoDB and Mongoose</i>
                                        </div>
                                        <div className='card-link'>
                                            <a className='a-button' target='_blank' href='https://github.com/JackStockwell/social-media-api'>Repo</a>
                                            <a className='a-button' target='_blank' href='https://drive.google.com/file/d/1u5WADCq0ukM81_ZcOcL1-QbQxYjpcW9w/view'>Video</a>
                                        </div>
                                    </div>           
                                </div>
                            </Reveal>
                            <Reveal>
                                <div className='card'>
                                    <img className='p-img' alt='E-commerce API in action in postman' src='https://github.com/JackStockwell/e-commerce/raw/main/misc/assets/GET_requests.gif' />  
                                    <div className='overlay'>
                                        <div>
                                            <h4>E-Commerce API</h4>
                                            <i>First go at an MySQL Database</i>
                                        </div>
                                        <div className='card-link'>
                                            <a className='a-button' target='_blank' href='https://github.com/JackStockwell/e-commerce'>Repo</a>
                                            <a className='a-button' target='_blank' href='https://drive.google.com/file/d/1BGE3OoJyaMvSWbGLt0-vWxaRH8toKYov/view'>Video</a>
                                        </div>
                                    </div>           
                                </div>
                            </Reveal>
                            <Reveal>
                                <div className='card'>
                                    <img className='p-img' alt='React portfolio in action' src='https://github.com/JackStockwell/react-portfolio/raw/main/SCREENSHOT.gif' />  
                                    <div className='overlay'>
                                        <div>
                                            <h4>React Portfolio</h4>
                                            <i></i>
                                        </div>
                                        <div className='card-link'>
                                            <a className='a-button' target='_blank' href='https://github.com/JackStockwell/react-portfolio'>Repo</a>
                                            <a className='a-button' target='_blank' href=''>Live</a>
                                        </div>
                                    </div>           
                                </div>
                            </Reveal>
                            <Reveal>
                                <div className='card'>
                                    <img className='p-img' src='https://github.com/JackStockwell/scranhub/raw/main/assets/screenshots/fullscreenshot.jpg' />  
                                    <div className='overlay'>
                                        <div>
                                            <h4>Scranhub</h4>
                                            <i>First collaborative project, for all your food needs.</i>
                                        </div>
                                        <div className='card-link'>
                                            <a className='a-button' target='_blank' href='https://github.com/JackStockwell/scranhub'>Repo</a>
                                            <a className='a-button' target='_blank' href='https://jackstockwell.github.io/scranhub/'>Live</a>
                                        </div>
                                    </div>           
                                </div>
                            </Reveal>
                        </section>
                    </div>
                </section>
            </div>
        </>
    )
}