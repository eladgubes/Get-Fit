import React from 'react'
import { Link } from 'react-router-dom'



export function CategoryInfo(props) {

    return (
        <div className="category-info flex column">
            <h2>{props.categoryInfo.name}</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, corporis. Nam corporis laborum ipsum fugiat non numquam dignissimos iste necessitatibus rerum dolores maiores aspernatur odio eos, minima, sequi saepe quibusdam!</p>
            <Link to={`/trains/${props.categoryInfo.name}`}>Choose</Link>
            <img src={props.categoryInfo.img} alt=""/>
        </div>
    )
}