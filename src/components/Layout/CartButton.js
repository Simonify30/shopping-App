import { useContext, useEffect, useState, React } from 'react';
import {FaCartArrowDown} from 'react-icons/fa';


import classes from './CartButton.module.css';
import CartContext from '../../store/cartContext';

const CartButton = (props) =>{
    const [btnisBump, setBtnIsBump] = useState(false);
    const cartCtx = useContext(CartContext);


    const {items} = cartCtx;


    const numberOfcrtItems = items.reduce((currNumber, item) => {
        return currNumber + item.amount;
    }, 0);


    const btnClasses = `${classes.button} ${btnisBump ? classes.bump : ''}`;


    useEffect(()=>{
        if(items.length === 0){
            return;
        }
        setBtnIsBump(true);

       const timer = setTimeout(() => {
            setBtnIsBump(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        }
    }, [items]);



    return <button className={btnClasses} onClick={props.onClick}>
        <span className={classes.icon}>
            <FaCartArrowDown />
        </span>
        <span className={classes.crt}>Your Cart</span>
        <span className={classes.badge}>{numberOfcrtItems}</span>

    </button>
}

export default CartButton;