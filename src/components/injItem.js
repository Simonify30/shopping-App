import { useContext } from "react";


import classes from './inj.module.css';
import CartContext from "../store/cartContext";
import ItemForm from "./Layout/ItemForm";


const InjItem = ( props) =>{

    const cartCtx = useContext(CartContext);

    const addCartHandler = amount => {
        cartCtx.addItem({
          id: props.thing.id,
          name: props.thing.injName,
          amount: amount,
          price: props.thing.injPrice,
          image: props.thing.injImage,
        });
    };

    return(
        <ul className={classes.bd}>
            <li className={classes.flex}>
                <div>
                    <img src={props.thing.injImage} alt={props.thing.injName} className={classes.itemImg}/>
                </div>

                <div className={classes.item}>
                    <div>
                        <h1 className={classes.itemName}>{props.thing.injName}</h1>
                        <p className={classes.itemDetails}>{props.thing.injDescription}</p>
                    </div>
                    <div>
                        <div className={classes.btnFlex}>
                            <h2 className={classes.itemPrice}>Price : #{props.thing.injPrice} </h2>
                            <ItemForm onAddToCart={addCartHandler} />
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    )
}

export default InjItem;