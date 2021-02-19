import React from 'react'
import Avatar from './images/avatar.jpg'

const ExperienceAccordion = () => {
    return (
        <div class="card">
        <a href="/" data-toggle="collapse" data-target="#collapseFour" aria-expanded="true" aria-controls="collapseFou">
            <div class="card-header" id="headingThree">
                <h5 class="card-title text-orange fw-600 my-2">
                    Experiences (10)
                </h5>
            </div>
        </a>
        <div id="collapseFour" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
            <div class="card-body">

                <table id="datatables-basic-four" class="table table-hover font-size-md mb-0" style={{width:"100%"}}>
                    <thead>
                        <tr>
                            <th>Experience</th>
                            <th>Price</th>
                            <th>Date/Time Start
                            </th>
                            <th>Date/Time End
                            </th>
                            <th>Quantity </th>
                            <th>Total </th>
                            <th>More</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <img class="rounded-circle rounded mr-2" src={Avatar} alt="Placeholde" width="45" height="45"></img> Deluxe Room
                            </td>
                            <td>
                                <span>&#8358;2000</span>
                            </td>
                            <td>
                                <span>22/02/2020</span>
                                <br />
                                <span>10:00AM</span>
                            </td>
                            <td>
                                <span>22/01/2020</span>
                                <br />
                                <span>03:00PM</span>
                            </td>

                            <td>x3</td>
                            <td>&#8358;3,000
                            </td>
                            <td>
                                <a href="/" class="btn btn-outline-main" data-toggle="modal" data-target="#experienceModal">
                                    <i class="mr-2 align-middle" data-feather="arrow-up-right"></i> Expand Details
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img class="rounded-circle rounded mr-2" src={Avatar} alt="Placeholder" width="40" height="40"></img> Deluxe Room
                            </td>
                            <td>
                                <span>&#8358;2000</span>
                            </td>
                            <td>
                                <span>22/02/2020</span>
                                <br />
                                <span>10:00AM</span>
                            </td>
                            <td>
                                <span>22/01/2020</span>
                                <br />
                                <span>03:00PM</span>
                            </td>

                            <td>x3</td>
                            <td>&#8358;3,000
                            </td>
                            <td>
                                <a href="/" class="btn btn-outline-main" data-toggle="modal" data-target="#experienceModal">
                                    <i class="mr-2 align-middle" data-feather="arrow-up-right"></i> Expand Details
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

export default ExperienceAccordion
