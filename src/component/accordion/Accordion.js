import React from 'react'
import Avatar from './images/avatar.jpg'
import EventAccordion from '../eventAccordion/EventAccordion'
import OnDisplayAccordion from '../onDisplayAccordion/OnDisplayAccordion' 
import ExperienceAccordion from '../experienceAccordion/ExperienceAccordion'
import OrderTotalAccordion from '../orderTotalAccordion/OrderTotalAccordion'
import DealsAccordion from '../dealsAccordion/DealsAccordion'

const Accordion = () => {
    return (
        <div class="accordion" id="accordionExample">
                               
        {/* deals */}
       <DealsAccordion />

     
        {/* events accordion */}
       <EventAccordion />
       
        {/* on display accordion */}
        <OnDisplayAccordion />
        {/* experience */}
        <ExperienceAccordion />
        {/* order total accordion */}
        <OrderTotalAccordion />
    </div>

    )
}

export default Accordion
