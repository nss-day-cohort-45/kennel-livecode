import React from "react"
import { Route, Switch } from "react-router-dom"
import { Home } from "./Home"
import { AnimalProvider } from "./animal/AnimalProvider"
import { AnimalList } from "./animal/AnimalList"
import { LocationProvider } from "./location/LocationProvider"
import { LocationList } from "./location/LocationList"
import { CustomerProvider } from "./customer/CustomerProvider"
import { CustomerList } from "./customer/CustomerList"
import { AnimalForm } from "./animal/AnimalForm"
import { AnimalDetail} from "./animal/AnimalDetail"

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
                  <Route exact path="/animals">
                    <AnimalList />
                  </Route>

                  <Route path="/animals/create">
                    <AnimalForm />
                  </Route>
                </CustomerProvider>
              </LocationProvider>
            </AnimalProvider>

            <AnimalProvider>
              <Route exact path="/animals/detail/:animalId(\d+)">
                  <AnimalDetail />
              </Route>
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
