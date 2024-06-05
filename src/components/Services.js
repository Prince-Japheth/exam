import React from 'react';
import { bankingServices } from "../constants";
import "../styles/services.css";

const Services = () => (
    
    <div className="container">
        <h2>Our Services</h2>
        <hr />
        <br />
        <section className="services">
            {bankingServices.map((service, index) => (
                <div className="card" key={index} data-aos="fade-up">
                    <div className="content">
                        <div className="icon">{service.icon}</div>
                        <div className='service'>
                        <div className="title">{service.title}</div>
                        <p>{service.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    </div>
);

export default Services;