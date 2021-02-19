import React, { createContext , useState , useEffect } from 'react'

export const OrdersContext = createContext()

export const OrdersProvider = (props) => {
     
    const [ orders , setOrders] = useState([])
    const API = "https://xchange.nativebrands.digital/api/v1/user/orders"
    useEffect(() => {

        fetch(API)
        .then(res => res.json())
        .then(data => setOrders(data))
        
    }, [])

    return(
        <OrdersContext.Provider value={[orders , setOrders]}>
               {props.children}
        </OrdersContext.Provider>
    )
}