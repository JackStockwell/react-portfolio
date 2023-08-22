import React, { useState } from "react";
import Navbar from "./Navbar";


export default function Container() {

    let pageData = {
        page: 'Home'
    }

    const [ data, setData ] = useState(pageData)

    const handlePageChange = (e) => {
        let { name, value } = e.target

        console.log(e.target)

    }

    return (
        <main>
            <Navbar handlePageChange={handlePageChange}/>
        </main>
    )
}