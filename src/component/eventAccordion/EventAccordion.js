import React from 'react'
import { ArrowUpRight} from 'react-feather'
import Avatar from './images/avatar.jpg'

const EventAccordion = () => {
    return (
        <div class="card">
        <a href="/" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
            <div class="card-header" id="headingTwo">
                <h5 class="card-title text-orange fw-600 my-2">
                    Events (10)
                </h5>
            </div>
        </a>
        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
            <div class="card-body">

                <table id="datatables-basic-two" class="table table-hover font-size-md mb-0" style={{width:"100%"}}>
                    <thead>
                        <tr>
                            <th>Event</th>
                            <th>Ticket</th>
                            <th>Price</th>
                            <th>Date/Time Start
                            </th>
                            <th>Date/Time End
                            </th>
                            <th>Quantity </th>
                            <th>More</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <img class="rounded mr-2" src={Avatar} alt="Placeholder" width="45" height="45"></img>
                                <div class="d-inline-block align-middle">
                                    <h6 class="font-weight-bold mb-1">
                                        Rave Beach Party
                                    </h6>
                                </div>
                            </td>
                            <td>
                                <span> Regular
                                    &#8358;10,000</span>
                                <br />
                                <span>x1</span>
                            </td>
                            <td>
                                <span>&#8358;2,000</span>
                            </td>
                            <td>
                                <span>July 20,
                                    2020</span>
                                <br />
                                <span>10:00AM</span>
                            </td>
                            <td>
                                <span>July 20,
                                    2020</span>
                                <br />
                                <span>03:00PM</span>
                            </td>
                            <td>x3</td>
                            <td>
                                <a href="/" class="btn btn-outline-main rounded-0" data-toggle="modal" data-target="#eventModal">
                                    <ArrowUpRight /> Expand Details
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img class="rounded mr-2" src={Avatar} alt="Placeholder" width="45" height="45"></img>
                                <div class="d-inline-block align-middle">
                                    <h6 class="font-weight-bold mb-1">
                                        Rave Beach Party
                                    </h6>
                                </div>
                            </td>
                            <td>
                                <span> Regular
                                    &#8358;10,000</span>
                                <br />
                                <span>x1</span>
                            </td>
                            <td>
                                <span>&#8358;2,000</span>
                            </td>
                            <td>
                                <span>July 20,
                                    2020</span>
                                <br />
                                <span>10:00AM</span>
                            </td>
                            <td>
                                <span>July 20,
                                    2020</span>
                                <br />
                                <span>03:00PM</span>
                            </td>
                            <td>x3</td>
                            <td>
                                <a href="/" class="btn btn-outline-main rounded-0" data-toggle="modal" data-target="#eventModal">
                                    <ArrowUpRight /> Expand Details
                                </a>
                            </td>
                        </tr>

                    </tbody>
                </table>
                <div class="row mx-0 px-0 py-3">
                    <div class="col-md-6"></div>
                    <div class="col-md-6 py-3 pl-5 pr-0 d-flex justify-content-between border-top fw-600">
                        <span>Sub-Total:</span>
                        <span class="pr-5">&#8358;6,000</span>
                    </div>
                </div>
            </div>

        </div>
    </div>

    )
}

export default EventAccordion
