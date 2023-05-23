import { useContext } from "react";
import classes from './Oil.module.css';
import CartContext from "../store/cartContext";
import ItemForm from "./Layout/ItemForm";


const OilItem = (props) => {

    const cartCtx = useContext(CartContext);

    const addCartHandler = amount => {
        cartCtx.addItem({
          id: props.oil.id,
          name: props.oil.oilName,
          amount: amount,
          price: props.oil.oilPrice,
          image: props.oil.oilImage,
        });
    };

    return(
        <ul className={classes.bd}>
            <li className={classes.flex}>
                <div>
                    <img src={props.oil.oilImage} alt={props.oil.oilName} className={classes.itemImg}/>
                </div>

                <div className={classes.item}>
                    <div>
                        <h1 className={classes.itemName}>{props.oil.oilName}</h1>
                        <p className={classes.itemDetails}>{props.oil.oilDescription}</p>
                    </div>
                    <div>
                        <div className={classes.btnFlex}>
                            <h2 className={classes.itemPrice}>Price : #{props.oil.oilPrice} </h2>
                            <ItemForm onAddToCart={addCartHandler} />
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    )
}

export default OilItem;