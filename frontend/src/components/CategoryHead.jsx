import React from 'react'
import { Link } from 'react-router-dom'



export function CategoryHead(props) {
    const selected = (props.id === props.category._id) ? 'select' : ''

    return (
        <>
            <Link to={`/categories/${props.category._id}`}><li className={`${selected}`}>{props.category.name}</li></Link>
        </>
    )
}