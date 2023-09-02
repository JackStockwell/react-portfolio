// IMPORTS
import React from "react";
import Reveal from "../utils/Animation/Reveal";
import "./projects.css"


export default function PortfolioList({ project }) {

    // Deconstruct project for ease
    let { description, image, title, url } = project

    // Returns single card object populated from the Index
    return(
        <>
            <Reveal>
                <div className='card'>
                    {/* Props import */}
                    <img className='p-img' alt='Display of the ' src={image} />  
                    <div className='overlay'>
                        <div>
                            <h4>{title}</h4>
                            <i>{description}</i>
                        </div>
                        <div className='card-link'>
                            <a className='a-button' target='_blank' rel="noreferrer" href={url.repo}>Repo</a>
                            <a className='a-button' target='_blank' rel="noreferrer" href={url.live}>{url.type}</a>
                        </div>
                    </div>           
                </div>
            </Reveal>
        </>
    )
}