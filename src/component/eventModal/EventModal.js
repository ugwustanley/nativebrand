import React from 'react'
import Unsplash from './images/unsplash-2.jpg'

const EventModal = () => {
    
    return (
        <div class=" modal fade" id="eventModal" tabindex=" -1" role=" dialog" aria-hidden=" true">
        <div class=" modal-dialog modal-lg" role=" document">
            <div class=" modal-content">
                <div class=" modal-header border-bottom-0">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="/">Order #93783940</a>
                            </li>
                            <li class="breadcrumb-item"><a href="/">Events</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Rave Beach Party</li>
                        </ol>
                    </nav>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body p-0">
                    <div class="row border-bottom mx-0 px-2 py-4 bg-light-pink">
                        <div class="col-md-5">
                            <img src={Unsplash} class="rounded w-100 h-100" alt="modal image" />
                        </div>
                        <div class="col-md-7">
                            <table class="table-bordered w-100">
                                <tbody>
                                    <tr>
                                        <th scope="row">
                                            <span class="font-weight-bold mr-2">Event:</span>
                                        </th>
                                        <td>
                                            <span class="text-mute">Rave Beach Party</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <span class="font-weight-bold mr-2">Price:</span>
                                        </th>
                                        <td>
                                            <span class="text-mute">&#8358;6,000</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope=" row">
                                            <span class=" font-weight-bold mr-2">Start Date</span>
                                        </th>
                                        <td>
                                            <span class=" text-mute">July 20, 2020 / 10:00 pm</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope=" row">
                                            <span class=" font-weight-bold mr-2">End Date </span>
                                        </th>
                                        <td>
                                            <span class=" text-mute">
                                                July 21, 2020 / 10:00 pm
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope=" row">
                                            <span class=" font-weight-bold mr-2">Location:</span>
                                        </th>
                                        <td>
                                            <span class=" text-mute">
                                                Residence Road, Awolowo Way, Victoria Island, Lagos
                                            </span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="col-12">
                            <div class="card my-4">
                                <div class="card-header border-bottom">
                                    <h5 class="fw-600 mb-0 card-title">
                                        Ticket Details
                                    </h5>
                                </div>
                                <div class="card-body d-flex justify-content-between">
                                    <p class="mb-0">Regular (x1)</p>
                                    <p class="mb-0">&#8358;1,000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class=" mx-0">
                        <h4 class="px-4 py-3 border-bottom"> Event Host</h4>
                        <div class="p-4">
                            <ul class="list-group my-4">
                                <li class=" list-group-item border-right-0 border-left-0 position-relative">
                                    <div class=" pb-4 d-flex align-items-center">
                                        <img src=" ../img/avatars/avatar.jpg" class=" img-fluid rounded-circle mb-2" width=" 100" height=" 100" alt=" Linda Miller" />
                                        <div class=" d-inline-block ml-3">
                                            <h4 class=" mb-1 fw-600">Allen Hotels and Suites</h4>
                                            <span class=" text-muted">Residence Road, Awolowo Way, Victoria Island,
                                                Lagos</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item border-right-0 border-left-0">
                                    <div class=" row">
                                        <div class=" col"> <span class=" fw-600">Vendor's Name:</span></div>
                                        <div class=" col"><span class=" text-right d-block">Luigi and Brothers
                                                    Yatch</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item border-right-0 border-left-0">
                                    <div class=" row">
                                        <div class=" col"> <span class=" fw-600">Email:</span></div>
                                        <div class=" col"><span class=" text-right d-block">Info@Ibyatch.com</span>
                                        </div>
                                    </div>
                                </li>
                                <li class=" list-group-item border-right-0 border-left-0">
                                    <div class=" row">
                                        <div class=" col"><span class=" fw-600">Phone:</span></div>
                                        <div class=" col"><span class=" text-right d-block">+234(703)190 3034</span>
                                        </div>
                                    </div>
                                </li>
                                <li class=" list-group-item border-right-0 border-left-0">
                                    <div class=" row">
                                        <div class=" col"> <span class=" fw-600">Category:</span></div>
                                        <div class=" col"><span class=" text-right d-block">Lifestyle</span></div>
                                    </div>
                                </li>
                                <li class=" list-group-item border-right-0 border-left-0">
                                    <div class=" row">
                                        <div class=" col"><span class=" fw-600">Location:</span></div>
                                        <div class=" col"><span class=" text-right d-block">Residence Road, Awolowo
                                                Way,
                                                Victoria Island, Lagos</span></div>
                                    </div>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default EventModal
