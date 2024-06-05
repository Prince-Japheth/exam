import React from 'react'
import "../styles/cta.css"
import { Link } from 'react-router-dom';

const CTA = () => {
    return (
        <div className='cta bg-black-gradient-2'>
            <div className="cta-right">
                <h1>Let’s try our service now!</h1>
                <p>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
            </div>
            <Link to="/get-started">
                <button className="bus-btn bg-blue-gradient" data-aos="fade-up">
                    Get Started
                </button>
            </Link>
        </div>
    )
}

export default CTA