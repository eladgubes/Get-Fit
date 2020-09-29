import React from 'react'

export function Train(props) {


    return (
        <div className="task flex space-between">
            <p>30</p>
            <h2>{props.train.taskName}</h2>
            {/* <button onClick={() => {props.onRemoveTask(props.idx)}}>Delete</button> */}
        </div>
    )
}