import React from 'react'
import { BrowserRouter as Router , Link } from 'react-router-dom'
import { Home , UserCheck , ShoppingCart , MessageCircle , Star, CreditCard , Users , Settings , LogOut } from 'react-feather'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Avatar from './images/user-avatar.png'
import Logo from './images/xchange-logo.png'
import './Sidebar.css'


const Sidebar = () => {
    return (
        <>
            <nav id="sidebar" className="sidebar" data-widget="tree">

               
                   <Link to="/test" className="sidebar-brand" >
                     <img src={Logo} className="img-fluid " alt="Xchange Logo" />
                   </Link>
                
            
            <div className="sidebar-content">
                <div className="sidebar-user">
                    <img src={Avatar} className="img-fluid rounded-circle mb-2" alt="Bosun Jones" />
                    <div className="font-weight-bold">Bosun Jones</div>
                    <small>Xchange User</small>
                </div>

                <ul className="sidebar-nav">
                    <li className="sidebar-header">
                        Navigation
                    </li>
                    <li className="sidebar-item active">
                        <a href="/" className="sidebar-link">
                            
                            <Home className="align-middle pb-1" width='17' />
                            <span className="align-middle">Dashboards</span>
                        </a>
                    </li>
                    <li className="sidebar-item">
                        <a href="#member" data-toggle="collapse" className="sidebar-link collapsed">
                            <i className="align-middle" data-feather="user-check"></i>
                            <UserCheck className="align-middle pb-1" width='17' />
                            <span className="align-middle">Membership</span>
                        </a>
                        <ul id="member" className="sidebar-dropdown list-unstyled collapse " data-parent="#sidebar">
                            <li className="sidebar-item">
                                <a className="sidebar-link" href="#">Membership Overview</a>
                            </li>
                            <li className="sidebar-item">
                                <a className="sidebar-link" href="#">Membership Pacakges</a>
                            </li>
                            <li className="sidebar-item">
                                <a className="sidebar-link" href="#">Subscription Histories</a>
                            </li>
                            <li className="sidebar-item">
                                <a className="sidebar-link" href="#">Check-in Attendance</a>
                            </li>
                        </ul>
                    </li>
                    <li className="sidebar-item">
                        <a href="/order" className="sidebar-link collapsed">
                            <i className="align-middle" data-feather="shopping-cart"></i>
                            <ShoppingCart className="align-middle pb-1" width='17' />
                            <span className="align-middle">Orders</span>
                        </a>
                    </li>
                    <li className="sidebar-item">
                        <a href="#" className="sidebar-link collapsed">
                            <i className="align-middle" data-feather="star"></i>
                            <Star className="align-middle pb-1" width='17' />
                            <span className="align-middle">Ratings &amp; Reviews</span>
                        </a>
                    </li>
                    <li className="sidebar-item">
                        <a href="/" className="sidebar-link collapsed">
                            <i className="align-middle" data-feather="message-circle"></i>
                            <MessageCircle className="align-middle pb-1" width='17' />
                            <span className="align-middle">Comments</span>
                        </a>
                    </li>
                    <li className="sidebar-item">
                        <a href="/" className="sidebar-link collapsed">
                            <i className="align-middle" data-feather="credit-card"></i>
                            <CreditCard className="align-middle pb-1" width='17' />
                            <span className="align-middle">Payments</span>
                        </a>
                    </li>
                    <li className="sidebar-item">
                        <a href="/" className="sidebar-link collapsed">
                            <i className="align-middle" data-feather="users"></i>
                            <Users className="align-middle pb-1" width='17' />
                            <span className="align-middle">Referrals</span>
                        </a>
                    </li>
                    <li className="sidebar-item">
                        <a href="/" className="sidebar-link collapsed">
                            <i className="align-middle" data-feather="settings"></i>
                            <Settings className="align-middle pb-1" width='17' />
                            <span className="align-middle">Account</span>
                        </a>
                    </li>
                    <li className="sidebar-item">
                        <a href="/" className="sidebar-link collapsed">
                            <i className="align-middle" data-feather="log-out"></i>
                            <LogOut className="align-middle pb-1" width='17' />
                            <span className="align-middle">Logout</span>
                        </a>
                    </li>
                    

                </ul>
            </div>
           </nav>
           
       </>
    )
}

export default Sidebar;
