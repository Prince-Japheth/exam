import React from 'react';
import { Link } from 'react-router-dom';
import { features } from "../constants";
import "../styles/business.css";

const Business = () => (
  <section id="features" className="business" data-aos="fade-up">
    <div className="businessDetails">
      <h1>You do the business, we’ll handle the money.</h1>
      <p>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>

      <Link to="/get-started">
        <button className="bus-btn bg-blue-gradient" data-aos="fade-up">
          Get Started
        </button>
      </Link>
    </div>
    <div className="businessStats">
      {features.map(feature => (
        <div className="featureCard feature-card">
          <img src={feature.icon} alt="" />
          <div className="featureCardDetails">
            <h4>{feature.title}</h4>
            <p>{feature.content}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Business;
