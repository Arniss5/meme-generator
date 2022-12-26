import React from "react"
import trollface from "../images/troll-face.png"

export function Header() {
    return (
        <header className="header">
            <img 
                src={trollface} 
                className="header--image"
                alt="troll face"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Course - Project 3</h4>
        </header>
    )
}