// IMPORTS
import React from "react";
import "./projects.css"
import PortfolioCard from "./PortfolioCard"

// Portfolio data.
import portfolio from "./data/portfolio.json"

function ProjectComponent() {

    return (
        <>
        {/* Maps through portfolio data with the data supplied from the data in portfolio.json */}
            { 
                portfolio.map((item, index) => {
                    return (<PortfolioCard project={item} />)
                })
            }
        </>
    )
}

export default ProjectComponent;