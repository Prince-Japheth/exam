import React from 'react'
import { card } from "../assets";
import { Link } from 'react-router-dom';
import "../styles/cardDeal.css"

const CardDeal = () => {
  return (
    <div className='cardDeal' data-aos="fade-up">
    <div className="cardDealDetails">
      <h1>Find a better card deal in few easy steps.</h1>
      <p>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
      <Link to="/get-started">
        <button className="bus-btn bg-blue-gradient" data-aos="fade-up">
          Get Started
        </button>
      </Link>
    </div>
    <div className="cardDealStats">
      <img src={card} alt="" />
    </div>
    </div>
  )
}

export default CardDeal