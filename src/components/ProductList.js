import { useContext } from "react";


import classes from './ProductList.module.css'
import ItemForm from "./Layout/ItemForm";
import CartContext from "../store/cartContext";




const ProductList = (props) => {

    const cartCtx = useContext(CartContext);

    const addCartHandler = amount => {
        cartCtx.addItem({
          id: props.id,
          name: props.name,
          amount: amount,
          price: props.price,
          image: props.image,
        });
    };


    return(
        <ul className={classes.bd}>
            <li className={classes.flex}>
                <div>
                    <img src={props.image} alt={props.name} className={classes.itemImg}/>
                </div>

                <div className={classes.item}>
                    <div>
                        <h1 className={classes.itemName}>{props.name}</h1>
                        <p className={classes.itemDetails}>{props.description}</p>
                    </div>
                    <div>
                        <div className={classes.btnFlex}>
                            <h2 className={classes.itemPrice}>Price : #{props.price} </h2>
                            <ItemForm onAddToCart={addCartHandler} />
                        </div>
                    </div>
                </div>
            </li>
        </ul>
        
    )

}

export default ProductList;