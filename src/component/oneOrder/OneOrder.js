import React , { useState , useContext} from 'react'
import { Eye} from "react-feather"
import { DetailContext } from '../ContextAPI/DetailContext'

const OneOrder = ({order}) => {

    const [detail, setId] = useContext(DetailContext)

    const HandleClick = () =>{
        setId(order.id)
        console.log("setted")
    }

    return (
        <tr>
        <td>{order.orderId}</td>
        <td>
            &#8358;{order.total}
        </td>
        <td>{order.buyer}</td>
        <td>
            Deal (3)
        </td>
        <td>
            <span class="badge badge-warning p-2 rounded-0">New</span>
        </td>
        <td>
            <a href="/detail" onClick={HandleClick} class="text-orange fs-12 font-weight-bold d-inline-block">
                <i class="align-middle mr-1" data-feather="eye"></i>
                <Eye className="align-middle mr-1 feather mb-1" width='20' /> More details
            </a>
        </td>
       </tr>
    )
}

export default OneOrder
