import React from "react"
import "./Animal.css"

export const AnimalCard = (props) => {
    // this..
    // const animal = props.animal
    // const owner = props.owner
    // const location = props.location
    // is the same as...
    const { animal } = props
    return (<section className="animal fred">
        <h3 className="animal__name">{animal.name}</h3>
        <div className="animal__breed">Breed: {animal.breed}</div>
        <div className="animal__owner">Owner: {animal.customer.name}</div>
        <div className="animal__location">{animal.location.name}</div>

    </section>
)}
