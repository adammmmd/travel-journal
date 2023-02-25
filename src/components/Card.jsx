import React from "react";

export default function Card(props) {
    return (
        <div className="card">
            <img className="card-img" src={props.photo} alt="" />
            <div className="card-info">
                <div className="location-card">
                    <img src="./assets/download (1).png" />
                    <p>{props.country}</p>
                    <a href="{props.location}">View on Google Maps</a>
                </div>
                <h1>{props.place}</h1>
                <h2>{props.date}</h2>
                <p className="card-desc">{props.description}</p>
            </div>
        </div>
    )
}