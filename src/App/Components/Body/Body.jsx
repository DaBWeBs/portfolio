import React from 'react'

function Body() {
    return (
        <div className='body'>
            <div className="left">
                <h2>Skills</h2>
                <ul className="skills">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>React</li>
                    <li>Python</li>
                </ul>
            </div>
            <div className="right">
                <h1 className="name">Isaac Rutledge</h1>
                <p className="info">Hi there, I'm a fullstack web developer. Here's a showcase of some of my skills!</p>
                <button className="projectsbtn">Check Out My Projects!</button>
            </div>
        </div>
    )
}

export default Body
