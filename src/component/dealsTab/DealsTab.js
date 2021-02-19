import React from 'react'
import Avatar from './images/avatar.jpg'
import {Eye , Trash2} from 'react-feather'

const DealsTab = () => {
    return (
        <>
          
          <div class="tab-pane active" id="tab-1" role="tabpanel">
                                        <div class="card shadow-none">
                                            <div class="card-header px-4">
                                                <h5 class="card-title">SAVED DEALS</h5>
                                                <h6 class="card-subtitle text-muted">This is the record of all your orders till date</h6>
                                            </div>
                                            <div class="card-body">
                                                <table id="datatables-basic-one" class="table table-hover font-size-md" style={{width: "100%"}}>
                                                    <thead>
                                                        <tr>
                                                            <th>#</th>
                                                            <th>Deal</th>
                                                            <th>Vendor</th>
                                                            <th>Start Date / End Date</th>
                                                            <th>Price</th>
                                                            <th>Date Saved</th>
                                                            <th>Status </th>
                                                            <th>Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>1</td>
                                                            <td>
                                                                <img class="rounded-circle rounded mr-2 " src={Avatar} alt="Placeholder" width="40" height="40"></img> Deluxe Room 
                                                            </td>
                                                            <td>Sheraton Hotel</td>
                                                            <td>
                                                                <span>22/01/2020</span>
                                                                <br />
                                                                <span>22/01/2020</span>
                                                            </td>
                                                            <td>
                                                                <span><del>&#8358;2000</del> <span>-
                                                                        Regular</span></span>
                                                                <br />
                                                                <span>&#8358;1000 <span>- Sales</span></span>
                                                            </td>
                                                            <td>July 10, 2020</td>
                                                            <td>
                                                                <span class="badge badge-danger rounded-0 p-2">Inactive</span>
                                                            </td>
                                                            <td>
                                                                <div class="text-orange fs-12 font-weight-bold d-inline-block">
                                                                    <Eye width='14'  className = "pb-1 mr-1"  /> View
                                                                </div>
                                                                <div class="mx-2 d-inline-block">
                                                                    |
                                                                </div>
                                                                <div class="text-orange fs-12 font-weight-bold d-inline-block">
                                                                     <Trash2 width='14' className="align-middle mr-1 mb-1" />
                                                                     Delete
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>2</td>
                                                            <td>
                                                                <img class="rounded-circle rounded mr-2 " src={Avatar} alt="Placeholder" width="40" height="40"></img> Deluxe Room 
                                                            </td>
                                                            <td>Sheraton Hotel</td>
                                                            <td>
                                                                <span>22/01/2020</span>
                                                                <br />
                                                                <span>22/01/2020</span>
                                                            </td>
                                                            <td>
                                                                <span><del>&#8358;2000</del> <span>-
                                                                        Regular</span></span>
                                                                <br />
                                                                <span>&#8358;1000 <span>- Sales</span></span>
                                                            </td>
                                                            <td>July 10, 2020</td>
                                                            <td>
                                                                <span class="badge badge-success rounded-0 p-2">Active</span>
                                                            </td>
                                                            <td>
                                                                <div class="text-orange fs-12 font-weight-bold d-inline-block">
                                                                    <Eye width='14'  className = "pb-1 mr-1 mr-1"  /> View
                                                                </div>
                                                                <div class="mx-2 d-inline-block">
                                                                    |
                                                                </div>
                                                                <div class="text-orange fs-12 font-weight-bold d-inline-block">
                                                                     <Trash2 width='14' className="align-middle mr-1 mb-1" /> Delete
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>3</td>
                                                            <td>
                                                                <img class="rounded-circle rounded mr-2 " src={Avatar} alt="Placeholder" width="40" height="40"></img> Deluxe Room 
                                                            </td>
                                                            <td>Sheraton Hotel</td>
                                                            <td>
                                                                <span>22/01/2020</span>
                                                                <br />
                                                                <span>22/01/2020</span>
                                                            </td>
                                                            <td>
                                                                <span><del>&#8358;2000</del> <span>-
                                                                        Regular</span></span>
                                                                <br />
                                                                <span>&#8358;1000 <span>- Sales</span></span>
                                                            </td>
                                                            <td>July 10, 2020</td>
                                                            <td>
                                                                <span class="badge badge-success rounded-0 p-2">Active</span>
                                                            </td>
                                                            <td>
                                                                <div class="text-orange fs-12 font-weight-bold d-inline-block">
                                                                    <Eye width='14'  className = "pb-1 mr-1"  /> View
                                                                </div>
                                                                <div class="mx-2 d-inline-block">
                                                                    |
                                                                </div>
                                                                <div class="text-orange fs-12 font-weight-bold d-inline-block">
                                                                     <Trash2 width='14' className="align-middle mr-1 mb-1" /> Delete
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>4</td>
                                                            <td>
                                                                <img class="rounded-circle rounded mr-2 " src={Avatar} alt="Placeholder" width="40" height="40"></img> Deluxe Room 
                                                            </td>
                                                            <td>Sheraton Hotel</td>
                                                            <td>
                                                                <span>22/01/2020</span>
                                                                <br />
                                                                <span>22/01/2020</span>
                                                            </td>
                                                            <td>
                                                                <span><del>&#8358;2000</del> <span>-
                                                                        Regular</span></span>
                                                                <br />
                                                                <span>&#8358;1000 <span>- Sales</span></span>
                                                            </td>
                                                            <td>July 10, 2020</td>
                                                            <td>
                                                                <span class="badge badge-danger rounded-0 p-2">Inactive</span>
                                                            </td>
                                                            <td>
                                                                <div class="text-orange fs-12 font-weight-bold d-inline-block">
                                                                    <Eye width='14'  className = "pb-1 mr-1"  /> View
                                                                </div>
                                                                <div class="mx-2 d-inline-block">
                                                                    |
                                                                </div>
                                                                <div class="text-orange fs-12 font-weight-bold d-inline-block">
                                                                     <Trash2 width='14' className="align-middle mr-1 mb-1" /> Delete
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>5</td>
                                                            <td>
                                                                <img class="rounded-circle rounded mr-2 " src={Avatar} alt="Placeholder" width="40" height="40"></img > Deluxe Room 
                                                            </td>
                                                            <td>Sheraton Hotel</td>
                                                            <td>
                                                                <span>22/01/2020</span>
                                                                <br />
                                                                <span>22/01/2020</span>
                                                            </td>
                                                            <td>
                                                                <span><del>&#8358;2000</del> <span>-
                                                                        Regular</span></span>
                                                                <br />
                                                                <span>&#8358;1000 <span>- Sales</span></span>
                                                            </td>
                                                            <td>July 10, 2020</td>
                                                            <td>
                                                                <span class="badge badge-success rounded-0 p-2">Active</span>
                                                            </td>
                                                            <td>
                                                                <div class="text-orange fs-12 font-weight-bold d-inline-block">
                                                                    <Eye width='14'  className = "pb-1 mr-1"  /> View
                                                                </div>
                                                                <div class="mx-2 d-inline-block">
                                                                    |
                                                                </div>
                                                                <div class="text-orange fs-12 font-weight-bold d-inline-block">
                                                                     <Trash2 width='14' className="align-middle mr-1 mb-1" /> Delete
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                        

        </>
    )
}

export default DealsTab
