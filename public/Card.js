import React from "react";

export default function Card(props) {
    let badgeText
    if(props.openSpots === 0)
    {
        badgeText = "SOLD OUT"
    }
    else if (props.location === "Online")
    {
        badgeText = "ONLINE"
    }
    return (
        <div className ="card">
            {badgeText  && <div className = "card--badge">{badgeText}</div>}
            <img className = "card--img" src={`./images/${props.coverImg}`} alt="experience photo" />
            <div className="card--rate">
                <img className = "card--star" src= "./images/star.png" alt ="little star" />
                <span>{props.stats.rating} </span>
                <span className = "gray">({props.stats.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p className = "card--title">{props.title}</p>
            <p><b>From ${props.price} </b>/ person</p>
        </div>
    )
}