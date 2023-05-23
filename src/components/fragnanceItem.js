import { useContext } from 'react';


import classes from './fragnance.module.css';
import CartContext from '../store/cartContext';
import ItemForm from './Layout/ItemForm';


const FragnanceItem = (props) => {

    const cartCtx = useContext(CartContext);

    const addCartHandler = amount => {
        cartCtx.addItem({
          id: props.thing.id,
          name: props.thing.perfumeName,
          amount: amount,
          price: props.thing.perfumePrice,
          image: props.thing.perfumeImage,
        });
    };

    return(
        <ul className={classes.bd}>
            <li className={classes.flex}>
                <div>
                    <img src={props.thing.perfumeImage} alt={props.thing.perfumeName} className={classes.itemImg}/>
                </div>

                <div className={classes.item}>
                    <div>
                        <h1 className={classes.itemName}>{props.thing.perfumeName}</h1>
                        <p className={classes.itemDetails}>{props.thing.perfumeDescription}</p>
                    </div>
                    <div>
                        <div className={classes.btnFlex}>
                            <h2 className={classes.itemPrice}>Price : #{props.thing.perfumePrice} </h2>
                            <ItemForm onAddToCart={addCartHandler} />
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    )
}

export default FragnanceItem;