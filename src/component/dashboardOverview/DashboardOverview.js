import React from 'react'
import Saveditems from '../savedItems/SavedItems'
import { ArrowUpRight , Bookmark, CreditCard, ShoppingCart , Loader} from 'react-feather'

const DashboardOverview = () =>{
    return(
                <React.Fragment>
                    <div className="d-flex justify-content-between">
                        <div className="header mb-3">
                            <h1 className="header-title">
                                User Dashboard
                            </h1>
                            <p className="header-subtitle">Hello there, Bosun Jones!</p>
                        </div>
                        <div className="position-relative">
                            <div className="d-inline-block text-light py-1 px-2 ">
                                <i className="align-middle mr-2 fas fa-fw fa-clock"></i>
                                <span>Last Login: 22/01/2020</span>
                            </div>
                        </div>
                    </div>

                    <div className="row py-4 p-3 bg-white mx-0 position-relative my-4">
                        <div className="col-lg-6">
                            <h5 className="text-orange mb-1">XCHANGE MEMBERSHIP</h5>
                            <p className="mb-0">Get exclusive access to the best lorem ipsum dolor sit amet!</p>
                        </div>
                        <div className="col-lg-6 d-flex justify-content-start justify-content-lg-end align-items-center">
                            <a href="#" className="btn btn-outline-main border-0">
                                Upgrade Membership
                                <i className="ml-1 align-middle" data-feather="arrow-up-right"></i>
                                <ArrowUpRight />
                            </a>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6 ">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col mt-0">
                                            <h5 className="card-title">All Orders</h5>
                                        </div>

                                        <div className="col-auto">
                                            <div className="avatar">
                                                <div className="avatar-title rounded-circle bg-main-color">
                                                    <i className="align-middle" data-feather="shopping-cart"></i>
                                                    <ShoppingCart />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <h1 className="display-5 mt-1 mb-3">32</h1>
                                    <div className="mb-0">
                                        All Orders
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 ">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col mt-0">
                                            <h5 className="card-title text-dark">All Saved Items</h5>
                                        </div>

                                        <div className="col-auto">
                                            <div className="avatar">
                                                <div className="avatar-title rounded-circle bg-main-color">
                                                    <i className="align-middle" data-feather="bookmark"></i>
                                                    <Bookmark />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <h1 className="display-5 mt-1 mb-3">32</h1>
                                    <div className="mb-0">
                                        All your active deals
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 ">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col mt-0">
                                            <h5 className="card-title">My Xchange Points</h5>
                                        </div>

                                        <div className="col-auto">
                                            <div className="avatar">
                                                <div className="avatar-title rounded-circle bg-main-color">
                                                    <i className="align-middle" data-feather="loader"></i>
                                                    <Loader />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <h1 className="display-5 mt-1 mb-3">32</h1>
                                    <div className="mb-0">
                                        All avlaible points
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 ">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col mt-0">
                                            <h5 className="card-title">Wallet Balance</h5>
                                        </div>

                                        <div className="col-auto">
                                            <div className="avatar">
                                                <div className="avatar-title rounded-circle bg-main-color">
                                                    <i className="align-middle" data-feather="credit-card"></i>
                                                    <CreditCard />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <h1 className="display-5 mt-1 mb-3">32</h1>
                                    <div className="mb-0">
                                        User Wallet amount
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                  
            </ React.Fragment>
    )
}

export default DashboardOverview;

