import React from "react"
import "./Animal.css"

export const AnimalCard = ({animal, owner}) => (
    <section className="animal fred">
        <h3 className="animal__name">{animal.name}</h3>
        <div className="animal__breed">Breed: {animal.breed}</div>
        <div className="animal__owner">Owner: {owner.name}</div>
        <div className="animal__location">{animal.location.name}</div>

    </section>
)
