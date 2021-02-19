import React , { useContext } from 'react'
import DealModal from '../dealModal/DealModal'
import Accordion from '../accordion/Accordion'
import EventModal from '../eventModal/EventModal'
import DisplayModal from '../displayModal/DisplayModal'
import ExperienceModal from '../experienceModal/ExperienceModal'
import { DetailContext } from '../ContextAPI/DetailContext'

const SingleOrder = () => {

//const [ detail , setId ] = useContext(DetailContext)

const [detail, setId] = useContext(DetailContext)

console.log(detail , "333333333333")

    return (
        <>
            <DealModal />
            <EventModal />
            <DisplayModal />
            <ExperienceModal />



            <div class="content">
                <div class="container-fluid">
                    <div class="d-flex justify-content-between">
                        <div class="header mb-3">
                            <h1 class="header-title">
                                Orders {detail ? detail.orderId : 'None'}
                            </h1>
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="/">Dashboard</a>
                                    </li>
                                    <li class="breadcrumb-item"><a href="/order">Orders</a>
                                    </li>
                                    <li class="breadcrumb-item active" aria-current="page">{detail ? detail.orderId : 'None'}</li>
                                </ol>
                            </nav>
                        </div>
                    </div>


                    {/* recent order */}
                    <div class="row mb-0">
                        <div class="col">
                            <ul class="list-group mb-5">
                                <li class="list-group-item">
                                    <div class="d-flex justify-content-between">
                                        <h4 class="pt- 2 fw-600">Order Details
                                        </h4>
                                        <div class="font-size-md bg-orange text-light py-2 px-3">
                                            <span class="">Order Status:
                                            </span>
                                            <span class="font-weight-medium">Completed</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="d-flex justify-content-between">
                                        <p class="mb-0 fw-600">Order ID:</p>
                                        <p class="mb-0">{/* */}{detail ? detail.orderId : 'None'}</p>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="d-flex justify-content-between">
                                        <p class="mb-0 fw-600">Order Status:
                                        </p>
                                        <p class="mb-0">Completed</p>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="d-flex justify-content-between">
                                        <p class="mb-0 fw-600">Date Ordered:
                                        </p>
                                        <p class="mb-0">22/01/2020</p>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="d-flex justify-content-between">
                                        <p class="mb-0 fw-600">Order Group:
                                        </p>
                                        <p class="mb-0">Deals(3), Experiences (5), Events (1), On-Display (8)</p>
                                    </div>
                                </li>
                            </ul>

                            <ul class="list-group mb-5">
                                <li class="list-group-item">
                                    <div class="d-flex justify-content-between">
                                        <h4 class="pt-2 fw-600">My Billing Details
                                        </h4>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="d-flex justify-content-between">
                                        <p class="mb-0 fw-600">Full Name:
                                        </p>
                                        <p class="mb-0">{/* */}{detail ? detail.buyer : 'None'}</p>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="d-flex justify-content-between">
                                        <p class="mb-0 fw-600">Email Address:
                                        </p>
                                        <p class="mb-0">
                                            bosunjonesmuyiwa@gmail.com</p>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="d-flex justify-content-between">
                                        <p class="mb-0 fw-600">Phone Number:
                                        </p>
                                        <p class="mb-0">08098765432</p>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="d-flex justify-content-between">
                                        <p class="mb-0 fw-600">Sex:</p>
                                        <p class="mb-0">Male</p>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="d-flex justify-content-between">
                                        <p class="mb-0 fw-600">Address:</p>
                                        <p class="mb-0">123, Lagos Street, Lagos, Nigeria</p>
                                    </div>
                                </li>
                            </ul>


                            {/* accordion section */}

                            <Accordion />
                       </div>
                  </div>
             </div>
        </div>
           
        </>
    )
}

export default SingleOrder
