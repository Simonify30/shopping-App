import { useState } from "react";

import InjItem from "./injItem";
import data from "../injData";
import classes from './Main.module.css'



const Injection = ()=>{

    const [InjectionData] = useState(data);


    const injectionItem = InjectionData.map(thing => (
        <InjItem
            key={thing.id}
            thing={thing}
        />
    ));


    return(
        <div className={classes.holder}>
            {injectionItem}
        </div>
    )
}

export default Injection;