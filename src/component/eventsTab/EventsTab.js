import React from 'react'
import { Eye , Trash2} from 'react-feather'
import Avatar from './images/avatar.jpg'

const EventsTab = () => {
    return (
        <div class="tab-pane" id="tab-2" role="tabpanel">
        <div class="card shadow-none">
            <div class="card-header px-4">
                <h5 class="card-title">SAVED EVENTS</h5>
                <h6 class="card-subtitle text-muted">This is the record of all your events till date</h6>
            </div>
            <div class="card-body">
                <table id="datatables-basic-two" class="table table-hover font-size-md " style={{width:"100%"}}>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Event</th>
                            <th>Category</th>
                            <th>Event Date</th>
                            <th>Event Fee</th>
                            <th>Date Saved</th>
                            <th>Status </th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>
                                <img class="rounded-circle rounded mr-2 " src={Avatar} alt="Placeholder" width="40" height="40"></img> Eko Trade Fair
                            </td>
                            <td>Hotel and Clubs</td>
                            <td>
                                22/01/2020
                            </td>
                            <td>
                                Free
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
                            <td>2</td>
                            <td>
                                <img class="rounded-circle rounded mr-2 " src={Avatar} alt="Placeholder" width="40" height="40"></img> Eko Trade Fair
                            </td>
                            <td>Hotel and Clubs</td>
                            <td>
                                22/01/2020
                            </td>
                            <td>
                                Free
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
    )
}

export default EventsTab
