import React from 'react'
import {Link} from 'react-router-dom'



export function Category(props) {

    return (
        <div className={`category`}>
            <h2>{props.category.name}</h2>
            <Link to={`/categories/${props.category._id}`}><div className="cover" ></div></Link>
            <img src={props.category.img} alt="" />
            {/* <button onClick={() => { props.onGetCategoryInfo(props.category._id) }}>Show details</button> */}
        </div>
    )
}