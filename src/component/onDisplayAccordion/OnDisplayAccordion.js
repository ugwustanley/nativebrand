import React from 'react'
import Avatar from './images/avatar.jpg'

const OnDisplayAccordion = () => {
    return (
        <div class="card">
        <a href="/" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
            <div class="card-header" id="headingThree">
                <h5 class="card-title text-orange fw-600 my-2">
                    On Display (10)
                </h5>
            </div>
        </a>
        <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
            <div class="card-body">

                <table id="datatables-basic-three" class="table table-hover font-size-md mb-0" style={{width:"100%"}}>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total </th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <img class="rounded rounded-circle mr-2" src={Avatar} alt="Placeholde" width="45" height="45"></img> Ankara Shirt
                            </td>
                            <td>
                                &#8358;2,000
                            </td>
                            <td> x2 </td>
                            <td>&#8358;20,000
                            </td>
                            <td>
                                <a href="/" class="btn btn-outline-main rounded-0" data-toggle="modal" data-target="#displayModal">
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

export default OnDisplayAccordion
