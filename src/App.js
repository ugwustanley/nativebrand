import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Loader from './component/loader/Loader'
import Sidebar from './component/sidebar/Sidebar'
import NavBar from './component/navbar/Navbar'
import Dashboard from './component/dashboard/Dashboard'
import DashboardContent from './component/DashboardContent/DashboardContent'
import Footer from './component/footer/Footer'
import './App.css'
import './bootstrap/modern.css'
import { OrdersProvider } from './component/ContextAPI/OrdersContext'
import { DetailProvider  } from './component/ContextAPI/DetailContext'

class App extends React.Component{
  render(){
      return (
        <div className="wrapper">
          
          <OrdersProvider>
          <DetailProvider>
               <Sidebar />
               <Dashboard />
           </DetailProvider>
           </OrdersProvider>
          
        </div>
      );
    }
    
    
}
export default App;