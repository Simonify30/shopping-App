import { useContext } from 'react';

import classes from './LotionItem.module.css';
import ItemForm from './Layout/ItemForm';
import CartContext from '../store/cartContext';


const LotionItem = (props)=>{

    const cartCtx = useContext(CartContext);

    const addCartHandler = amount => {
        cartCtx.addItem({
          id: props.thing.id,
          name: props.thing.lotionName,
          amount: amount,
          price: props.thing.lotionPrice,
          image: props.thing.lotionImage,
        });
    };

    return(
        <ul className={classes.bd}>
            <li className={classes.flex}>
                <div>
                    <img src={props.thing.lotionImage} alt={props.thing.lotionName} className={classes.itemImg}/>
                </div>

                <div className={classes.item}>
                    <div>
                        <h1 className={classes.itemName}>{props.thing.lotionName}</h1>
                        <p className={classes.itemDetails}>{props.thing.lotionDescription}</p>
                    </div>
                    <div>
                        <div className={classes.btnFlex}>
                            <h2 className={classes.itemPrice}>Price : #{props.thing.lotionPrice} </h2>
                            <ItemForm onAddToCart={addCartHandler} />
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    )
}

export default LotionItem;