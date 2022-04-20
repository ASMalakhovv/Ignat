import React from 'react'
import {NavLink} from "react-router-dom";
import './Header.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {PATH} from "./Pages";

function Header() {

    return (
        <div>
            <div className="navigation">
                <NavLink to={PATH.PRE_JUNIOR} className="navLink-navigation">PRE-JUNIOR</NavLink>
                <NavLink to={PATH.JUNIOR} className="navLink-navigation">JUNIOR</NavLink>
                <NavLink to={PATH.JUNIOR_PLUS} className="navLink-navigation">JUNIOR-PLUS</NavLink>
                <SuperButton>
                    Navigation
                </SuperButton>
            </div>
        </div>
    )
}

export default Header
