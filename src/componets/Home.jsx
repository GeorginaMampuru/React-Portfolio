import React from 'react'
import profilehero from '../assets/images/profilehero.png'

function Home() {
  return (
    <div>
        <div>
            <div>
            <h3>I'm Georgina | Mampuru</h3>
            <span class="tag">Software  Developer</span>
            <p>Welcome to my portfolio! I am thrilled to have you here and I would like to take this opportunity to introduce myself as a software developer.  I am passionate about creating innovative and efficient software solutions.

          Throughout my career, I have had the privilege of working on various projects,
           each contributing to my growth as a developer. 
           I specialize in expetise  such as web development, mobile app development, data analysis.  I strive to deliver high-quality code that meets both functional and aesthetic requirements.</p>
           <div>
            <button>Download CV</button>
           </div>
           <div>
            <img src="{profilehero}" alt="" />
           </div>
            </div>
        </div>
    </div>
  )
}

export default Home
