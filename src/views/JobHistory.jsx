import React from 'react'

export default function JobHistory(props) {
    return (
        <div className="content__wrapper">
            <body className="vscode-light">
                <h2 id="zachary-edwards"><strong>Zachary Edwards</strong></h2>
                <h3 id="full-stack-developer"><strong>Full Stack Developer</strong></h3>
                <p><strong>Address:</strong> 1201 Acorn Lane Richmond, VA 23225<br/>
                <strong>Phone:</strong> 571-271-8601<br/>
                <strong>E-mail:</strong> <a href="mailto:zachary.paul.edwards@gmail.com">zachary.paul.edwards@gmail.com</a></p>
                <p>Developer with 3+ years experience integrating disparate systems, building internal web applications, and RESTful API's. Naturally driven to learn, challenge myself, and to find the optimal solution to the problem. Currently leading the first development team in Virginia Premier in deciding on architecture, tech stack, release pipeline, and addressing security risks.</p>
                <hr/>
                <h3 id="languages-and-technologies"><strong>Languages and Technologies</strong></h3>
                <p><strong>C#</strong> (Fluent), <strong>Java</strong> (Proficient), <strong>Sql</strong> (Proficient), <strong>Python 3.7</strong> (data automation and POCs)</p>
                <p><strong>AngularJs and Angular 2+</strong> (creation of CRUD views, report views, and customized events)</p>
                <p><strong>Unit and Integration Testing</strong> (Fluent)</p>
                <p><strong>CI/CD and DevOps</strong> (created and modified build and release pipelines using TFS)</p>
                <hr/>
                <h3 id="experience"><strong>Experience</strong></h3>
                <p><strong>Virginia Premier</strong><br/>
                Full Stack Developer<br/>
                2019-01 - 2019-09</p>
                <ul>
                <li>Naturally fell into Team Lead role while taking on a variety of tasks outside of development allowing me to focus on developing my soft skills.</li>
                <li>Moved PHI from a deprecated system into a replacement system and created a recurring data load by consuming REST API's.</li>
                <li>Discovered and reported a major security vulnerability in a critical application which lead to us renegotiate our contract.</li>
                <li>Deployed the ELK stack using docker on a Red Hat server to analyze and visualize logs.</li>
                <li>Built and supported Python solutions that automate data entry for recurring processes.</li>
                </ul>
                <p><strong>SunTrust Mortgage, Originations &amp; Capital Markets</strong><br/>
                Associate Applications Developer<br/>
                2016-06 - 2018-12</p>
                <ul>
                <li>Developed a solution which streams a connection to an exchange server and matches email criteria to a client to price bid requests for loans. I use a modified Levensthein formula to match against known clients.</li>
                <li>Created an assignment tracker using Angular 6 which functions similarly to an google calendar. This tracker is used by traders to know when bids are due in addition to aiding in prioritization of their work. Provided the ability to assign tasks to a trader by either drag and drop or click events and filter the view for each trader.</li>
                <li>Migrated a long running ETL which calculates P&amp;L for our trade desk. Solutions I provided cut run time of tasks from 3 minutes to 15 seconds and also fixed deadlock concurrency issues caused by asynchronously run tasks.</li>
                <li>When introduced as a full time employee I built the first Angular application for the team while learning the framework and utilized it's features to include real time calculations.</li>
                </ul>
                <hr/>
                <h3 id="additional-activities"><strong>Additional Activities</strong></h3>
                <p>In my spare time I am building out a web application that integrates with Spotify's API to visualize my listening habits over time. Back end is built using .NET core 3.0 and MySQL. The front end is built on Angular 6 and the PrimeNG library.</p>
                <p>Built an android application in college that we released to google play. The app randomly generated a grid in which the user had to find the longest Eulerian circuit and scaled in difficulty as the user progressed through the game.</p>
                <hr/>
                <h3 id="education"><strong>Education</strong></h3>
                <p><strong>Virginia Commonwealth University</strong><br/>
                2012-08 - 2016-12</p>
                <p>Bachelor Degree in Mathematics with a concentration of Applied Mathematics with a minor in physics. Graduated Cum Laude.</p>
            </body>
        </div>
    )
}