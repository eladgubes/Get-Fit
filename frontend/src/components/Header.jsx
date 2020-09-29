import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../assec/img/workout.png'


export function Header() {
    return (
        <div className="header flex">
            <div className="main-content flex space-between text-center container align-center ">
                <div className="logo flex">
                    <h3>Get-Fit</h3>
                    <img src={logo} alt="" />
                </div>
                <div>
                    <ul className="main-nav flex space-between clean-list ">
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/categories'}>Categories</Link></li>
                        <li><Link to={'/about'}>About</Link></li>
                    </ul>
                </div>

            </div>

        </div>
    )
}