import React from 'react'
import Avatar from './images/avatar.jpg'
import {Eye , Trash2} from 'react-feather'

const OndisplayTab = () => {
    return (
        <div class="tab-pane" id="tab-3" role="tabpanel">
        <div class="card shadow-none">
            <div class="card-header px-4">
                <h5 class="card-title">SAVED ON DISPLAY PRODUCTS</h5>
                <h6 class="card-subtitle text-muted">This is the record of all saved on display products till date</h6>
            </div>
            <div class="card-body">
                <table id="datatables-basic-three" class="table table-hover font-size-md " style={{width:"100%"}}>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Date Saved</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>
                                <img class="rounded-circle rounded mr-2 " src={Avatar} alt="Placeholder" width="40" height="40"></img> Ankara Shirt </td>

                            <td>
                                &#8358;1,000
                            </td>
                            <td>July 10, 2020</td>
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
                            <td>2</td>
                            <td>
                                <img class="rounded-circle rounded mr-2 " src={Avatar} alt="Placeholder" width="40" height="40"></img> Ankara Shirt </td>

                            <td>
                                &#8358;1,000
                            </td>
                            <td>July 10, 2020</td>
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
                            <td>3</td>
                            <td>
                                <img class="rounded-circle rounded mr-2 " src={Avatar} alt="Placeholder" width="40" height="40"></img> Ankara Shirt </td>

                            <td>
                                &#8358;1,000
                            </td>
                            <td>July 10, 2020</td>
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
    )
}

export default OndisplayTab
