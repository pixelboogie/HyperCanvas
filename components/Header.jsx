import React from "react"
import { getImageURL } from "../image-util"

export default function Header(){
    return(
        <header className="header">
            <img 
                src={getImageURL("LaughingFace.png")} 
                className="header--image"
            />
            <h2 className="header--title"> Meme Generator</h2>
            <h4 className="header--project">HyperCanvas by PixelBoogie</h4>
        </header>
    )
}