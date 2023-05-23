import { useState } from "react";


import Header from "./Layout/Header";
import NavLink from "./NavLink";
import Cart from "./Cart/Cart";
import CartProvider from "../store/cartProvider";
import { Outlet } from "react-router-dom";



const Home = ()=>{
  const [cartIsShown, setCartIsShown] = useState(false);



    const ShowCartHandler = () => {
        setCartIsShown(true);
    }


    const HideCartHandler = () => {
        setCartIsShown(false);
    }

    return(
        <CartProvider >
            {cartIsShown && <Cart onHideCart={HideCartHandler} />}

            <Header onShowCart={ShowCartHandler} />

            <NavLink />
            <section>
                <Outlet />
            </section>

        </CartProvider>
    )
}

export default Home;