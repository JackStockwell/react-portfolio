import React from "react";
import ProfilePic from "../../assets/profilepic.jpeg"
import Reveal from "../utils/Reveal";
import "./headers.css"

export default function Title({ page, header: {title, sub}}) {

    return (
            <header className='header'>
                <div className="blur">
                    <Reveal>
                        <div className='h-div'>
                            {page === 'Home' && (<img className='profile-img' alt="Portrait of Jack Stockwell" src={ProfilePic}></img>)}
                            <h1>{title}</h1>
                            <h2>{sub}</h2>
                        </div>
                    </Reveal>
                </div>
            </header>
    )
}