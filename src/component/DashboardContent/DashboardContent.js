import React from 'react'
import SavedItems from '../savedItems/SavedItems'
import RecentOrders from '../recentOrders/RecentOrders'
import DashboardOverview from '../dashboardOverview/DashboardOverview'

const DashboardContent = () => {
    return (
        <main className="content">
        <div className ="container-fluid">
           <DashboardOverview />   
           <SavedItems />
           <RecentOrders />
        </div>
        </main>
    )
}

export default DashboardContent
