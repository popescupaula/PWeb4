import React from 'react'
import './AboutUsStyles.css'

import Team from '../assets/i1.png'
import Space from '../assets/i2.png'

const AboutUs = () => {
    return (
        <div className='aboutUs'>
            <div className='left'>
                <h1>About Us</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className='right'>
                <div className='img-container'>
                    <div className='image-stack top'>
                        <img src={Team} className='img' alt='' />
                    </div>
                    <div className='image-stack bottom'>
                        <img src={Space} className='img' alt='' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
