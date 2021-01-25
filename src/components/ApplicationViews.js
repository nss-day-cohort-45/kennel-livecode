import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { AnimalProvider } from "./animal/AnimalProvider"
import { AnimalList } from "./animal/AnimalList"
import { LocationProvider } from "./location/LocationProvider"
import { LocationList } from "./location/LocationList"
import { CustomerProvider } from "./customer/CustomerProvider"
import { CustomerList } from "./customer/CustomerList"

export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            <AnimalProvider>
              <LocationProvider>
                <CustomerProvider>
                  <Route path="/animals">
                    <AnimalList />
                  </Route>
                </CustomerProvider>
              </LocationProvider>
            </AnimalProvider>

            <LocationProvider>
              <Route path="/locations">
                <LocationList />
              </Route>
            </LocationProvider>

            <CustomerProvider>
              <Route path="/customers">
                <CustomerList />
              </Route>
            </CustomerProvider>
        </>
    )
}
