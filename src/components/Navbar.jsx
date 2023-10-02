import React from "react";
import { NavLink } from 'react-router-dom';


export const Navbar = () => {


    return (
        <nav  style={{width: '90%', margin: 'auto', paddingTop: '30px', textAlign: 'center'}}>
            <NavLink to='/'>
                <h2>
                Webinar On Talent Maximization
                </h2>
            </NavLink>
        </nav>
    )
}