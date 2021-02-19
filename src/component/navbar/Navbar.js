import React from 'react'
import Avatar from './images/user-avatar.png'

const Navbar = () => {

  

    return (
        <>
            <nav className="navbar navbar-expand navbar-theme">
                <a className="sidebar-toggle d-flex mr-2" data-toggle="collapse" data-target="#sidebar" role="button" >
                    <i className="hamburger align-self-center"></i>
                </a>
                <div className="navbar-collapse collapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item dropdown ml-lg-2">
                            <a className="nav-link dropdown-toggle position-relative" href="/" id="alertsDropdown" data-toggle="dropdown">
                                <i className="align-middle fas fa-bell"></i>
                                <span className="indicator"></span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right py-0" aria-labelledby="alertsDropdown">
                                <div className="dropdown-menu-header">
                                    4 New Notifications
                                </div>
                                <div className="list-group">
                                    <a href="/" className="list-group-item">
                                        <div className="row no-gutters align-items-center">
                                            <div className="col-2">
                                                <i className="ml-1 text-danger fas fa-fw fa-bell"></i>
                                            </div>
                                            <div className="col-10">
                                                <div className="text-dark">Order Completed</div>
                                                <div className="text-muted small mt-1">Your order #1000 has been processed successfully.
                                                </div>
                                                <div className="text-muted small mt-1">2h ago</div>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="/" className="list-group-item">
                                        <div className="row no-gutters align-items-center">
                                            <div className="col-2">
                                                <i className="ml-1 text-danger fas fa-fw fa-bell"></i>
                                            </div>
                                            <div className="col-10">
                                                <div className="text-dark">Order Cancelled</div>
                                                <div className="text-muted small mt-1">Your order #1000 has been processed successfully.
                                                </div>
                                                <div className="text-muted small mt-1">12hours ago</div>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="/" className="list-group-item">
                                        <div className="row no-gutters align-items-center">
                                            <div className="col-2">
                                                <i className="ml-1 text-danger fas fa-fw fa-bell"></i>
                                            </div>
                                            <div className="col-10">
                                                <div className="text-dark">Order Completed</div>
                                                <div className="text-muted small mt-1">Your order #1000 has been processed successfully.
                                                </div>
                                                <div className="text-muted small mt-1">2h ago</div>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="/" className="list-group-item">
                                        <div className="row no-gutters align-items-center">
                                            <div className="col-2">
                                                <i className="ml-1 text-danger fas fa-fw fa-bell"></i>
                                            </div>
                                            <div className="col-10">
                                                <div className="text-dark">Order Cancelled</div>
                                                <div className="text-muted small mt-1">Your order #1000 has been processed successfully.
                                                </div>
                                                <div className="text-muted small mt-1">2h ago</div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="dropdown-menu-footer">
                                    <a href="/" className="text-muted">Show all notifications</a>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item dropdown ml-lg-2">
                            <a className="nav-link dropdown-toggle position-relative" href="#" id="userDropdown" data-toggle="dropdown">
                                <img src={Avatar} width="25" height="25" className="img-fluid rounded-circle mb-2" alt="Bosun Jones" />
                            </a>
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                                <a className="dropdown-item" href="/"><i className="align-middle mr-1 fas fa-fw fa-user"></i>
                                    View Profile
                                </a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="/">
                                    <i className="align-middle mr-1 fas fa-fw fa-arrow-alt-circle-right"></i> Sign out
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>

            </nav> 
            </>
        
    )
}

export default Navbar;
