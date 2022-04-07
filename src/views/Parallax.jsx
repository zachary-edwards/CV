import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

export default function Paralax(props) {
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
            header.style.backgroundImage = "url('url(/static/media/dsc_0733.f443837a.jpg)')"
        } else {
            const parallax = document.getElementById("parallax")
            parallax.style.height = '100vh'
            parallax.style.position = ''
        }
    }
    return (
        <div id="parallax" className="parallax">
            <div id="caption" className="caption">
                <span className="border">
                    Zachary Edwards
                </span>
            </div>
        </div>
    )
}