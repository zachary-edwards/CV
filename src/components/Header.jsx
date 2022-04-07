import React, { useEffect } from "react";
import './header.css'

export default function Header() {

    let loaded = false
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        loaded = true;
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const handleScroll = (event) => {
        if (window.scrollY + 50 > window.innerHeight && loaded) {
            // const parallax = document.getElementById("parallax")
            // parallax.style.height = '50px'
            // parallax.style.position = 'fixed'

            // const caption = document.getElementById("caption")
            // caption.style.height = '0px'
            const header = document.getElementById("header")
            //header.style.backgroundImage = "../imgs/dsc_0733.jpg"
        } else {
            const parallax = document.getElementById("parallax")
            parallax.style.height = '100vh'
            parallax.style.position = ''
        }
    }
    return (
        <div id="header" className="header">
            <div className="header--item">About Me</div>
            <div className="header--item">Job History</div>
            <div className="header--item">Education</div>
            <div className="header--item">Contact</div>
        </div>
    )
}