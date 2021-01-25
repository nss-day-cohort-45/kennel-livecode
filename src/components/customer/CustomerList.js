import React, { useContext, useEffect } from "react"
import { CustomerContext } from "./CustomerProvider"
import { CustomerCard } from "./CustomerCard"
import "./Customer.css"

export const CustomerList = () => {
  // This state changes when `getCustomers()` is invoked below
  const { customers, getCustomers } = useContext(CustomerContext)

  //useEffect - reach out to the world for something
  useEffect(() => {
    getCustomers()
  }, [])


  return (
    <div className="customers">
      {
        customers.map(customer => {
          console.log(customer)
          return <CustomerCard key={customer.id} customer={customer} />
        })
      }
    </div>
  )
}
