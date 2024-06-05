import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Chart, LineController, LineElement, PointElement, LinearScale, Title, CategoryScale, Tooltip, Legend } from 'chart.js';
import "../styles/dashboard.css";
import { dashNav, topChartRow, payedBills, recentTransactions, notifications } from '../constants';
import { logo } from '../assets';

Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale, Tooltip, Legend);

const Dashboard = () => {
    const location = useLocation();
    const [formData, setFormData] = useState(null);
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };


    useEffect(() => {
        const formState = location.state;
        if (formState && formState.formData) {
            setFormData(formState.formData);
        }
    }, [location.state]);

    useEffect(() => {
        const ctx = document.getElementById('chart')?.getContext('2d');
        if (!ctx) {
            console.error("Chart context not found");
            return;
        }

        const data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [{
                label: 'Debit',
                borderColor: '#00c7d6',
                pointBackgroundColor: '#00c7d6',
                pointBorderColor: '#ffffff',
                pointRadius: 5,
                pointHoverRadius: 7,
                borderWidth: 2,
                data: [6000, 4500, 8000, 3000, 3500, 5500, 25000, 8000, 4000, 5000, 8000, 5000]
            }]
        };

        const options = {
            responsive: true,
            maintainAspectRatio: true,
            animation: {
                easing: 'easeInOutQuad',
                duration: 520
            },
            scales: {
                y: {
                    ticks: {
                        color: '#5e6a81',
                        font: {
                            size: 14
                        }
                    },
                    grid: {
                        color: 'rgba(200, 200, 200, 0.08)',
                        lineWidth: 1
                    }
                },
                x: {
                    ticks: {
                        color: '#5e6a81',
                        font: {
                            size: 14
                        }
                    },
                    grid: {
                        display: false
                    }
                }
            },
            elements: {
                line: {
                    tension: 0.4
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(0,0,0,0.7)',
                    titleFont: {
                        family: 'Poppins',
                        size: 16
                    },
                    bodyFont: {
                        family: 'Poppins',
                        size: 14
                    },
                    titleColor: '#ffffff',
                    bodyColor: '#ffffff',
                    caretSize: 5,
                    cornerRadius: 4,
                    padding: 10
                }
            }
        };

        new Chart(ctx, {
            type: 'line',
            data: data,
            options: options
        });

        const openRightArea = () => document.querySelector('.app-right').classList.add('show');
        const closeRightArea = () => document.querySelector('.app-right').classList.remove('show');
        const openMenu = () => document.querySelector('.app-left').classList.add('show');
        const closeMenu = () => document.querySelector('.app-left').classList.remove('show');

        document.querySelector('.open-right-area')?.addEventListener('click', openRightArea);
        document.querySelector('.close-right')?.addEventListener('click', closeRightArea);
        document.querySelector('.menu-button')?.addEventListener('click', openMenu);
        document.querySelector('.close-menu')?.addEventListener('click', closeMenu);

        return () => {
            document.querySelector('.open-right-area')?.removeEventListener('click', openRightArea);
            document.querySelector('.close-right')?.removeEventListener('click', closeRightArea);
            document.querySelector('.menu-button')?.removeEventListener('click', openMenu);
            document.querySelector('.close-menu')?.removeEventListener('click', closeMenu);
        };
    }, []);


    return (
        <div class="app-container">
            <div class="app-left">
                <button class="close-menu">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                </button>
                <ul class="nav-list">
                    <Link to="/">
                        <div className="logo-container">
                            <img src={logo} alt="" className='logo' />
                            <p>YAFET</p>
                        </div>
                    </Link>
                    {dashNav.map((item, index) => (
                        <li key={index} className={`nav-list-item ${item.name === 'Dashboard' ? 'active' : ''}`}>
                            <a className="nav-list-link" href={item.href}>
                                {item.icon}
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>

                <Link to="/get-started" className="nav-list-link logout">
                    Logout
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-box-arrow-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0z" />
                        <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708z" />
                    </svg>
                </Link>
            </div>
            <div class="app-main">
                <div class="main-header-line">
                    <h1>Welcome {formData && formData.username}</h1>

                    <div class="action-buttons">
                        <button class="open-right-area">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-activity"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
                        </button>
                        <button class="menu-button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
                        </button>
                    </div>
                </div>
                <div className="chart-row three">
                    {topChartRow.map((chart, index) => (
                        <div className="chart-container-wrapper" key={index}>
                            <div className="chart-container">
                                <div className="chart-info-wrapper">
                                    <h2>{chart.title}</h2>
                                    <span>{chart.value}</span>
                                </div>
                                <div className="chart-svg">
                                    <svg viewBox="0 0 36 36" className={`circular-chart ${chart.color}`}>
                                        <path className="circle-bg" d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"></path>
                                        <path className="circle" strokeDasharray={`${chart.percentage}, 100`} d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"></path>
                                        <text x="18" y="20.35" className="percentage">{chart.percentage}%</text>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div class="chart-row two">
                    <div class="chart-container-wrapper big">
                        <div class="chart-container">
                            <div class="chart-container-header">
                                <h2>Transaction History</h2>
                                <span cla>Debit</span>
                                <span>Last 30 days</span>
                            </div>
                            <div class="line-chart">
                                <canvas id="chart"></canvas>
                            </div>
                            <div class="chart-data-details">
                                <div class="chart-details-header"></div>
                            </div>
                        </div>
                    </div>
                    <div class="chart-container-wrapper small">
                        <div class="chart-container">
                            <div class="chart-container-header">
                                <h2>Payed Bills</h2>
                                <span href="">This month</span>
                            </div>
                            {payedBills.map((item, index) => (
                                <div key={index} className={`progress-bar-info ${item.name === 'Dashboard' ? 'active' : ''}`}>
                                    <span className={`${item.class}`}></span>
                                    <span className="progress-type">{item.name}</span>
                                    <span className="progress-amount">{item.amount}</span>
                                </div>
                            ))}
                        </div>
                        <div class="chart-container">
                            <div class="chart-container-header">
                                <h2>Payed Bills</h2>
                                <span href="">This month</span>
                            </div>
                            {payedBills.map((item, index) => (
                                <div key={index} className={`progress-bar-info ${item.name === 'Dashboard' ? 'active' : ''}`}>
                                    <span className={`${item.class}`}></span>
                                    <span className="progress-type">{item.name}</span>
                                    <span className="progress-amount">{item.amount}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div class="app-right">
                <button class="close-right">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                </button>
                <div class="profile-box">
                    <div class="profile-photo-wrapper">
                        {formData && formData.profilePicture && (
                            <img src={formData.profilePicture} alt="Profile" />
                        )}
                    </div>
                    <div>
                        {formData && (
                            <>
                                <center>
                                    <p class="profile-text">{formData.username}</p>
                                    <p class="profile-text">{formData.email}</p>
                                    {/* Toggle password visibility on click */}
                                    <div className="password-container">
                                        <button onClick={togglePasswordVisibility} className='password'>
                                            {showPassword ? (
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#5e6a81" className="bi bi-eye" viewBox="0 0 16 16">
                                                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                                                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                                                </svg>
                                            ) : (
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#5e6a81" className="bi bi-eye-slash" viewBox="0 0 16 16">
                                                    <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z" />
                                                    <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829" />
                                                    <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z" />
                                                </svg>
                                            )}
                                        </button>
                                        <p className="profile-text">{showPassword ? formData.password : '*'.repeat(formData.password.length)}</p>
                                    </div>
                                </center>
                            </>
                        )}
                    </div>
                </div>

                <div class="app-right-content">
                    <div class="app-right-section">
                        <div class="app-right-section-header">
                            <h2>Recent Transactions</h2>
                            <span class="notification-active">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bank" viewBox="0 0 16 16">
                                    <path d="M0 4v-.5A2.5 2.5 0 0 1 2.5 1h11A2.5 2.5 0 0 1 16 3.5V4H0z" />
                                    <path d="M0 6v5.5A2.5 2.5 0 0 0 2.5 14h11a2.5 2.5 0 0 0 2.5-2.5V6H0z" />
                                    <path d="M0 6v-.5A2.5 2.5 0 0 1 2.5 3h11A2.5 2.5 0 0 1 16 5.5V6H0z" fill-opacity=".3" />
                                </svg>
                            </span>
                        </div>
                        {recentTransactions.map((item, index) => (
                            <div key={index} className={`message-line ${item.name === 'Dashboard' ? 'active' : ''}`}>
                                <img src={`${item.picture}`} alt="profile" />
                                <div class="message-text-wrapper">
                                    <p class="message-text">{item.name}</p>
                                    <p class="message-subtext">{item.message}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div class="app-right-section">
                        <div class="app-right-section-header">
                            <h2>Notifications</h2>
                            <span class="notification-active">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell">
                                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                                    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                                </svg>
                            </span>
                        </div>
                        {notifications.map((item, index) => (
                            <div key={index} className={`notification-line ${item.name === 'Dashboard' ? 'active' : ''}`}>

                                <span className={`${item.iconcolor}`}>
                                    {item.icon}
                                </span>
                                <div class="notification-text-wrapper">
                                    <p class="notification-text">{item.message}</p>
                                    <a class="action" href="">{item.action}</a>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;