import React from "react";
import { useState } from "react";

import classes from "./Main.module.css";
import data from "../data";
import ProductList from "./ProductList";

const Main = props => {
  const [details] = useState(data);

  

  const productList = details.map(item => (
    <ProductList
      key={item.id}
      name={item.name}
      price={item.price}
      description={item.description}
      image={item.image}
      id={item.id}
    />
  ));

  return (
    <section className={classes.holder}>
    {productList}
    </section>
  );
};

export default Main;
