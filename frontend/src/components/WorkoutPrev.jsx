import React from 'react'
import { Link } from 'react-router-dom'



export function WorkoutPrev(props) {
    console.log(props);
    
    return (
        <div className="workout-prev">
            <img src={props.workout.workoutImg} alt="" />
            <h2>{props.workout.workoutName}</h2>
            <Link to={`/trains/${props.workout._id}`}>start</Link>
            <p>level:hard</p>
        </div>
    )
}