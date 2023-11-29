'use client'
import { getAllOrders } from "@/app/_clientAPI/orderAPI";
import { DataList } from "@/app/_components/dataLists/dataList";
import { useEffect, useState } from "react";



export default function Orders() {
    const [orders, setOrders] = useState([])
    useEffect(()=>{
        fetchData()
    }, [])

    const fetchData = async () =>{
        const orderData = (await getAllOrders()).data
        setOrders(orderData)
    }

    return (
            <main>
                Orders

                <div>
                    <DataList orderList={orders}/>
                </div>
            </main>
            
    )
}