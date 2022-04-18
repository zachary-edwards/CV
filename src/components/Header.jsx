import React, { useEffect } from "react";
import './header.css'

export default function Header() {
  useEffect(() => {
    scrollToDiv(window.location.hash.substring(1))
  }, [window.location.hash])

  const onClick = (id) => (event) => {
    scrollToDiv(id)
  }

  const scrollToDiv = (id) => {
    const element = document.getElementById(id)
    if (!element) return;
    const top = element.getBoundingClientRect().top + window.pageYOffset - 50 ;
    console.log(top)
    window.scrollTo({ top: top, behavior: 'smooth' })
  }

  return (
    <div id="header" className="header">
      <div className="header--item" onClick={onClick("about")}>About Me</div>
      <div className="header--item" onClick={onClick("job")}>Job History</div>
      <div className="header--item" onClick={onClick("education")}>Education</div>
      <div className="header--item" onClick={onClick("contact")}>Contact</div>
    </div>
  )
}