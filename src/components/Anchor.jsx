import React, { useEffect, useRef } from 'react'

export default function Anchor(props) {
    const anchor = useRef(null);

    useEffect(() => {
        const hash = window.location.hash
        console.log(hash)
        if (hash === `#${props.name}`) {
            console.log("henlo")
            anchor.current.scrollIntoView({ beahviour: "smooth" })
        }

    }, [window.location.pathname, props.name])

    return (<div ref={anchor}></div>)
}