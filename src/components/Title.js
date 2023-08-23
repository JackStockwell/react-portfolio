import React from "react";
import ProfilePic from "../assets/profilepic.jpeg"

export default function Title({ page, header: {title, sub}}) {
    console.log(page)
    return (
        <header className='header'>
            <div className="blur">
                <div className='h-div'>
                    {page === 'Home' && (<img className='profile-img' src={ProfilePic}></img>)}
                    <h1>{title}</h1>
                    <h2>{sub}</h2>
                </div>
            </div>
        </header>
    )
}