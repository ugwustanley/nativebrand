import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import { Route } from 'react-router-dom'
import SingleOrder from '../singleOrder/SingleOrder'
import Order from '../order/Order'
import DashboardContent from '../DashboardContent/DashboardContent'

const Dashboard = () => {
    return (
        <div className="main">
           <Navbar/> 
           
           <Route path='/' exact>
               <DashboardContent />
           </Route>
           <Route path='/order' exact>
               <Order />
           </Route>
           <Route path="/detail" exact>
                <SingleOrder />
           </Route>
           <Footer />
        </div>
    )
}

export default Dashboard
