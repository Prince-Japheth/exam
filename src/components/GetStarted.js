import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import validator from 'validator';
import { ThreeDots } from 'react-loader-spinner';
import "../styles/getstarted.css";
import defaultImage from './default.svg';

const Getstarted = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        profilePicture: defaultImage
    });

    const [errors, setErrors] = useState({
        username: '',
        email: '',
        password: '',
        profilePicture: ''
    });

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const validateForm = (name, value) => {
        switch (name) {
            case 'username':
                return value.length < 3 ? 'Username must be at least 3 characters long' : '';
            case 'email':
                return validator.isEmail(value) ? '' : 'Invalid email address';
            case 'password':
                return value.length < 6 ? 'Password must be at least 6 characters long' : '';
            default:
                return '';
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: validateForm(name, value) });
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file && file.type.startsWith('image/')) {
            if (file.size <= 65000) {
                const reader = new FileReader();
                reader.onload = function () {
                    setFormData({ ...formData, profilePicture: reader.result });
                };
                reader.readAsDataURL(file);
                setErrors({ ...errors, profilePicture: '' });
            } else {
                setErrors({ ...errors, profilePicture: 'Image size should be less than or equal to 60kb' });
            }
        } else {
            setErrors({ ...errors, profilePicture: 'Please upload a valid image file' });
        }
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = {
            username: validateForm('username', formData.username),
            email: validateForm('email', formData.email),
            password: validateForm('password', formData.password),
        };
        setErrors(validationErrors);

        if (Object.values(validationErrors).every(error => error === '')) {
            window.scrollTo(0, 0);
            setLoading(true);
            try {
                const response = await axios.post('https://664b1b8ea300e8795d443dc6.mockapi.io/api/users', formData);
                console.log('API response:', response);
                navigate('/dashboard', { state: { formData } });
            } catch (error) {
                console.error('There was an error submitting the form!', error);
            } finally {
                setLoading(false);
            }
        } else {
            console.log('Validation errors:', validationErrors);
        }
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-2"></div>
                <div className="col-lg-6 col-md-8 signup-box" data-aos="fade-up">
                    {loading ? (
                        <div className="loading-spinner">
                            <ThreeDots type="ThreeDots" color="#00BFFF" height={80} width={80} />
                        </div>
                    ) : (
                        <>
                            <div className="profile-pic" data-aos="fade-up">
                                <label className="-label" htmlFor="file">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                                            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
                                        </svg>
                                    </span>
                                </label>
                                <input id="file" type="file" name="photo" accept="image/*" onChange={handleImageChange} />
                                <img src={formData.profilePicture} id="output" width="200" alt="Profile" />
                            </div>

                            <label className="form-control-label" data-aos="fade-up">Profile Picture</label>
                            <br />
                            <label data-aos="fade-up" className='form-control-label text-danger'>*Not Compulsory but works</label>
                            <br />
                            {errors.profilePicture && <label className='form-control-label text-danger'>{errors.profilePicture}</label>}

                            <div className="col-lg-12 signup-form">
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group" data-aos="fade-up">
                                        <label className="form-control-label">USERNAME</label>
                                        <input
                                            type="text"
                                            name="username"
                                            className="form-control"
                                            value={formData.username}
                                            onChange={handleChange}
                                        />
                                        {errors.username && <small className="form-text text-danger">{errors.username}</small>}
                                    </div>

                                    <div className="form-group" data-aos="fade-up">
                                        <label className="form-control-label">EMAIL</label>
                                        <input
                                            type="text"
                                            name="email"
                                            className="form-control"
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                        {errors.email && <small className="form-text text-danger">{errors.email}</small>}
                                    </div>

                                    <div className="form-group" data-aos="fade-up">
                                        <label className="form-control-label">PASSWORD</label>
                                        <input
                                            type="password"
                                            name="password"
                                            className="form-control"
                                            value={formData.password}
                                            onChange={handleChange}
                                        />
                                        {errors.password && <small className="form-text text-danger">{errors.password}</small>}
                                    </div>

                                    <div className="col-lg-12 signupbttm">
                                        <div className="col-lg-12 signup-btm signup-button">
                                            <button type="submit" className="btn btn-outline-primary">SIGNUP</button>
                                        </div>
                                        <center>
                                            {/* <p>Already have an account? <a href="">Log In</a></p> */}
                                        </center>
                                    </div>
                                </form>
                            </div>
                        </>
                    )}
                </div>
                <div className="col-lg-3 col-md-2"></div>
            </div>
        </div>
    );
};

export default Getstarted;