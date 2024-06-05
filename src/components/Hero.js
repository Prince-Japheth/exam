import React from 'react'
import { Link } from 'react-router-dom';
import { discount, robot, arrowUp } from '../assets'
import "../styles/hero.css"

const Hero = () => (

  <section id='home' className="hero">
    <div className="heroDetails" data-aos="fade-up">
      <div className="heroDiscount" data-aos="fade-up">

        <img src={discount} alt="" />
        <p className="prg">

          <span className='text-white'>20% </span>
          Discount For {" "}
          <span className='text-white'>1 Month </span>
          Account

        </p>
      </div>
      <div className="heroGeneration" data-aos="fade-up">
        <div className="kkk">
          <h1 className='text-white' data-aos="fade-up">The Next <br className='hidden' />
            <h1 className='text-gradient' data-aos="fade-up">Generation</h1>
          </h1>
          <Link to="/get-started">
            <div className="getStarted text-gradient" data-aos="fade-up">
              <p className=''><span>GET</span> <img src={arrowUp} alt="" /></p>
              <span>STARTED</span>
            </div>
          </Link>

        </div>
        <h1 className='text-white ' data-aos="fade-up">
          Payment Method
        </h1>
        <p className="heroParagraph" data-aos="fade-up">
          Our team of experts uses a methodology to identify the credit cards most likely to fit your needs.
          We examine annual percentage rates, annual fees.
        </p>
      </div>
    </div>
    <div className="heroImg">
      <img src={robot} data-aos="fade-up" alt="" />
    </div>

  </section>
)


export default Hero