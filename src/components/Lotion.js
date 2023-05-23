import { useState } from "react";


import LotionItem from "./LotionItem";
import data from "../lotionData";
import classes from './Main.module.css'




const Lotion = (props)=>{

  const [LotionData] = useState(data);


  const lotionItem = LotionData.map(thing => (
    <LotionItem
        key={thing.id}
      thing={thing}
    />
  ));


    return(
        <div className={classes.holder}>{lotionItem}</div>
    )
}

export default Lotion;