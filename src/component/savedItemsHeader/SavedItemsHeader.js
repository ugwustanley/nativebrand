import React from 'react'
import { Link } from 'react-router-dom'

const SavedItemsHeader = () => {
    return (
        <div>
               <ul class="nav nav-tabs" role="tablist">
                                    <li class="nav-item">
                                        
                                        <a class="nav-link active px-4" href="#tab-1" data-toggle="tab" role="tab">
                                            <i class="align-middle mr-2" data-feather="tag"></i> Deals
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link px-4" href="#tab-2" data-toggle="tab" role="tab">
                                            <i class="align-middle mr-2" data-feather="calendar"></i> Events
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link px-4" href="#tab-3" data-toggle="tab" role="tab">
                                            <i class="align-middle mr-2" data-feather="shopping-cart"></i> On Display
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link px-4" href="#tab-4" data-toggle="tab" role="tab">
                                            <i class="align-middle mr-2" data-feather="file-text"></i> Stories
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link px-4" href="#tab-5" data-toggle="tab" role="tab">
                                            <i class="align-middle mr-2" data-feather="mic"></i> Podcasts
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link px-4" href="#tab-6" data-toggle="tab" role="tab">
                                            <i class="align-middle mr-2" data-feather="video"></i> Videos
                                        </a>
                                    </li>
                                </ul>
        </div>
    )
}

export default SavedItemsHeader
