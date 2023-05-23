import { useState } from "react";

import FragnanceItem from "./fragnanceItem";
import data from '../perfumeData';
import classes from './Main.module.css'




const Fragnance = ()=>{

    const [FragnanceData] = useState(data);


  const fragnanceItem = FragnanceData.map(thing => (
    <FragnanceItem
        key={thing.id}
        thing={thing}
    />
  ));


    return(
        <div className={classes.holder}>
            {fragnanceItem}
        </div>
    )
}

export default Fragnance;