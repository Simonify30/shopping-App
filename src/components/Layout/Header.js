import { Fragment } from "react";
import { FaHome } from 'react-icons/fa';


import classes from './Header.module.css';
import Slide from "./Slider";
import { NavLink } from "react-router-dom";

import CartButton from './CartButton';


const Header = (props) => {
    return<Fragment>
        <header className={classes.header}>
            <h1><NavLink to='/' style={({ isActive }) => {
              return { color: isActive ? "white" : "" };
            }}><span><FaHome /></span>Collex Costmetics</NavLink></h1>
            <CartButton onClick={props.onShowCart} />
        </header>

        <section className={classes.mainImg}>
            <Slide/>
        </section>

    </Fragment>
}

export default Header