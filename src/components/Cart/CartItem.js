import classes from './CartItem.module.css'


const cartItem = (props) => {
    return(
        <li className={classes.flex}>
            <div className={classes.det}>
                <img src={props.image} alt={props.name} className={classes.cartImg} />
                <div>
                    <h2>{props.name}</h2>

                    <div className={classes.sum}>
                        <span className={classes.price}>#{props.price}</span>
                        <span className={classes.amount}>x {props.amount}</span>
                    </div>
                </div>
                
            </div>

            <div className={classes.act}>
                <button onClick={props.onRemove}>-</button>
                <button onClick={props.onAdd}>+</button>
            </div>
        </li>
    )
}

export default cartItem;