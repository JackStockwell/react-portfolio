import React from "react";

export default function Title({header: {title, sub}}) {

    return (
        <header className='header'>
            <div className='h-div'>
                <h1>{title}</h1>
                <h2>{sub}</h2>
            </div>
        </header>
    )
}