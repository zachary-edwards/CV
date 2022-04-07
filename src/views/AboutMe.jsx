import React from 'react'

export default function AboutMe(props) {
    return (
        <div className="about-me__wrapper content__wrapper">
            <h3 style={{flexBasis: "content"}}>Hi, I'm <strong>Zach Edwards</strong></h3>
            <br/>
            <p>I'm in the process of building this website to increase my skillset with react. I want a way to showcase my personality and push my self in design and implementation. Ideally, if this all works out well, I can use this as my resume and start to <em>freelance</em>.</p>
            <p>I have some dreams for what this website is likely to become and some features that I would like to share with you in no particaluar order.</p>
            <ul>
            <li>About Me - this is what you're reading now but will be more refined and highlight who I am.</li>
            <li>CV/Resume - Self explaining here, this is my site and I want to use this in applications.</li>
            <li>References - I'm not sure about this one, seems wrong to provide peoples information about that, maybe make it available upon request.</li>
            <li>Work Examples - I like this idea, it could be a running blog, it could just contain what I'm working on in that particaular point in life OR projects I'm proud of.</li>
            <li>Contact information - Once again self explainitory, I want people to reach out to me if they want.</li>
            <li>Way to download/export a PDF of my so I can maintain it in this simple web app.</li>
            </ul>
        </div>
    )
}