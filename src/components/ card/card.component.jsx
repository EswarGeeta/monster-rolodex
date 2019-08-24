import React from 'react';
import './card.styles.css';
import smile from './smile.jpg';

export const Card = props => {
    const { name, id, email } = props.monster;
//    const imageLink = `https://robohash.org/${id}?set=set2`;
    const imageLink = "./smile.jpg";
    return <div className="card-container"> 
        <img src={smile} alt="monster" />
        <h2>{name}</h2>
        <p>{email}</p>
    </div>
}