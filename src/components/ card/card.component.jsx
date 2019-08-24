import React from 'react';
import './card.styles.css';

export const Card = props => {
    const { name, id, email } = props.monster;
    const imageLink = `https://robohash.org/${id}?set=set2`;
    return <div className="card-container"> 
        <img src={imageLink} alt="monster"></img>
        <h2>{name}</h2>
        <p>{email}</p>
    </div>
}