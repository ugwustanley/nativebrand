import React from 'react'
//import { Route} from 'react-router-dom'
import DealsTab from '../dealsTab/DealsTab'
import EventsTab from '../eventsTab/EventsTab'
import StoriesTab from '../storiesTab/StoriesTab'
import VideosTab from '../videosTab/VideosTab'
import PodcastTab from '../podcastTab/PodcastTab'
import OndisplayTab from '../ondisplayTab/OndisplayTab'
import SavedItemsHeader from '../savedItemsHeader/SavedItemsHeader'

const SavedItems = () => {
    return (   
                <>     
                    <div className="row py-5">
                        <div className="col-12">
                            <h6 className="header-title mb-3 text-dark">Saved Items</h6>
                            <div className="tab w-100">

                                  <SavedItemsHeader />

                                  <div className="tab-content px-0">
                                
                                        <DealsTab />
                                        <EventsTab />
                                        <OndisplayTab />     
                                        <StoriesTab />
                                        <PodcastTab />
                                        <VideosTab />

                                    </div>                             
                                </div>                          
                            </div>
                        </div>
                       
                        
                 </>
    )
}

export default SavedItems;


