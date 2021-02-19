import React from 'react'
import Avatar from './images/avatar.jpg'
import {Eye , Trash2} from 'react-feather'

const PodcastTab = () => {
    return (
        <div class="tab-pane" id="tab-5" role="tabpanel">
        <div class="card shadow-none">
            <div class="card-header px-4">
                <h5 class="card-title">SAVED PODCASTS</h5>
                <h6 class="card-subtitle text-muted">This is the record of all saved Podcasts
                </h6>
            </div>
            <div class="card-body">
                <table id="datatables-basic-five" class="table table-hover font-size-md " style={{width:"100%"}}>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Podcast</th>
                            <th>Author</th>
                            <th>Date Saved</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>
                                <img class="rounded-circle rounded mr-2 " src={Avatar} alt="Placeholder" width="40" height="40"></img> The fine art of doing everything
                            </td>
                            <td>
                                Bosun Jones
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
                                <img class="rounded-circle rounded mr-2 " src={Avatar} alt="Placeholder" width="40" height="40"></img> The fine art of doing everything
                            </td>
                            <td>
                                Bosun Jones
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

export default PodcastTab
