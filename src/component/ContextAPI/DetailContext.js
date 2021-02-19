import React, { createContext , useState , useEffect } from 'react'

export const DetailContext = createContext()

export const  DetailProvider = (props) =>{
    const [detail , setDetail] = useState()
    const [id , setId ] = useState(1)
    const API = `https://xchange.nativebrands.digital/api/v1/user/order/${id}`

    useEffect(() => {
       fetch(API)
       .then( res => res.json())
       .then(data => setDetail(data))
    }, [id])

    return(
        <DetailContext.Provider value={[detail , setId]}>
                {props.children}
        </DetailContext.Provider>
    )
}
