import React,{ useContext , useState} from 'react'
import OneOrder from '../oneOrder/OneOrder'
import { OrdersContext } from '../ContextAPI/OrdersContext'



const RecentOrders = () => {

    const [orders , setOrders]  = useContext(OrdersContext)
    console.log(orders , '22222222222222222222222222222')

    return (
        <div class="col-12 px-2 mx-0">
                            <h6 class="header-title mb-3 text-dark">Recent Orders</h6>

                            <div class="card shadow-none w-100">
                                <div class="card-header px-4">
                                    <h5 class="card-title">ORDERS</h5>
                                    <h6 class="card-subtitle text-muted">This is the record of all your orders till date
                                    </h6>
                                </div>
                                <div class="card-body">
                                    <table id="datatables-buttons" class="table table-hover  font-size-md " style={{width:"100%"}}>
                                        <thead>
                                            <tr>
                                                <th>Order ID</th>
                                                <th>Amount</th>
                                                <th>Date Purchased </th>
                                                <th>Order Group</th>
                                                <th>Order Status</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                           {
                                                orders.data ?
                                                orders.data.map( order => <OneOrder order={order} />)
                                                :
                                                console.log("not going through")
                                            }
                                            
                                           {/* <tr>
                                                <td>#1983990</td>
                                                <td>
                                                    &#8358;1,000
                                                </td>
                                                <td>July 10, 2020</td>
                                                <td>
                                                    Deal (3)
                                                </td>
                                                <td>
                                                    <span class="badge badge-warning p-2 rounded-0">New</span>
                                                </td>
                                                <td>
                                                    <div class="text-orange fs-12 font-weight-bold d-inline-block">
                                                        <i class="align-middle mr-1" data-feather="eye"></i> More details
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>#1983990</td>
                                                <td>
                                                    &#8358;1,000
                                                </td>
                                                <td>July 10, 2020</td>
                                                <td>
                                                    Deal (3)
                                                </td>
                                                <td>
                                                    <span class="badge badge-orange p-2 rounded-0">Processing</span>
                                                </td>
                                                <td>
                                                    <div class="text-orange fs-12 font-weight-bold d-inline-block">
                                                        <i class="align-middle mr-1" data-feather="eye"></i> More details
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>#1983990</td>
                                                <td>
                                                    &#8358;1,000
                                                </td>
                                                <td>July 10, 2020</td>
                                                <td>
                                                    Event (1), Deals (3), On-Display (2), Experiences (10)
                                                </td>
                                                <td>
                                                    <span class="badge badge-danger p-2 rounded-0">Cancelled</span>
                                                </td>
                                                <td>
                                                    <div class="text-orange fs-12 font-weight-bold d-inline-block">
                                                        <i class="align-middle mr-1" data-feather="eye"></i> More Details
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>#1983990</td>
                                                <td>
                                                    &#8358;1,000
                                                </td>
                                                <td>July 10, 2020</td>
                                                <td>
                                                    Event (1), Deals (3), On-Display (2), Experiences (10)
                                                </td>
                                                <td>
                                                    <span class="badge badge-success p-2 rounded-0">Completed</span>
                                                </td>
                                                <td>
                                                    <div class="text-orange fs-12 font-weight-bold d-inline-block">
                                                        <i class="align-middle mr-1" data-feather="eye"></i> More Details
                                                    </div>
                                                </td>
                                           </tr> */}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    


    )
}

export default RecentOrders
