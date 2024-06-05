import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../styles/contact.css";

library.add(fab, fas);

const Contact = () => {
    return (
        <div>
            <br />
            <center>
                <div className="form" data-aos="fade-up">
                    <div className="contact-info">
                        <h3 className="title text-light">Let's get in touch</h3>
                        <p className="text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                            dolorum adipisci recusandae praesentium dicta!
                        </p>

                        <div className="info">
                            <div className="information">
                                <FontAwesomeIcon icon={['fas', 'map-marker-alt']} />
                                <p>Abuja, Nigeria</p>
                            </div>
                            <div className="information">
                                <FontAwesomeIcon icon={['fas', 'envelope']} />&nbsp;&nbsp;
                                <p>lorem@ipsum.com</p>
                            </div>
                            <div className="information">
                                <FontAwesomeIcon icon={['fas', 'phone']} />&nbsp;&nbsp;
                                <p>123-456-789</p>
                            </div>
                        </div>

                        <div className="social-media">
                            <div className="social-icons">
                                <a href="#">
                                    <FontAwesomeIcon icon={['fab', 'facebook-f']} />
                                </a>
                                <a href="#">
                                    <FontAwesomeIcon icon={['fab', 'twitter']} />
                                </a>
                                <a href="#">
                                    <FontAwesomeIcon icon={['fab', 'instagram']} />
                                </a>
                                <a href="#">
                                    <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form">
                        <form action="" autoComplete="off">
                            <div className="input-container">
                                <label className="text-light" htmlFor="">Full Name</label>
                                <input type="name" name="name" className="input" />
                            </div>
                            <div className="input-container">
                                <label className="text-light" htmlFor="">Email</label>
                                <input type="email" name="email" className="input" />
                            </div>
                            <div className="input-container">
                                <label className="text-light" htmlFor="">Phone</label>
                                <input type="tel" name="phone" className="input" />
                            </div>
                            <div className="input-container textarea">
                                <label className="text-light" htmlFor="">Message</label>
                                <textarea name="message" className="input"></textarea>
                            </div>
                            <input type="submit" value="Send" className="btn" />
                        </form>
                    </div>
                </div>
            </center>
            <br />
        </div>
    );
}


export default Contact;