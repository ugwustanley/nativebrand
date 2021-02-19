import React , {useContext} from 'react'
import { OrdersContext } from '../ContextAPI/OrdersContext'
import OneOrder from '../oneOrder/OneOrder'

const Order = () => {
 
    const [orders , setOrders]  = useContext(OrdersContext)
    console.log(orders , 'weoupwuoehpohwepoihwepoihweoihwe')
    return (
        <div class="content">
                <div class="container-fluid">
                    <div class="d-flex justify-content-between">
                        <div class="header mb-3">
                            <h1 class="header-title">
                                Orders
                            </h1>
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="/">Dashboard</a></li>
                                    <li class="breadcrumb-item active" aria-current="page">Order</li>
                                </ol>
                            </nav>
                        </div>
                    </div>


                   {/* */}
                    <div class="row mb-0">
                        <div class="col">
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
                                                    <a href="single-order.html" class="text-orange fs-12 font-weight-bold d-inline-block">
                                                        <i class="align-middle mr-1" data-feather="eye"></i> More details
                                                    </a>
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
                                                    <a href="single-order.html" class="text-orange fs-12 font-weight-bold d-inline-block">
                                                        <i class="align-middle mr-1" data-feather="eye"></i> More details
                                                    </a>
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
                                                    <a href="single-order.html" class="text-orange fs-12 font-weight-bold d-inline-block">
                                                        <i class="align-middle mr-1" data-feather="eye"></i> More Details
                                                    </a>
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
                                                    <a href="single-order.html" class="text-orange fs-12 font-weight-bold d-inline-block">
                                                        <i class="align-middle mr-1" data-feather="eye"></i> More Details
                                                    </a>
                                                </td>
                                           </tr> */}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>

    )
}

export default Order
