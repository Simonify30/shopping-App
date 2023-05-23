import  { useState }  from "react";


import OilItem from "./OilItem";
import data from '../oilData';
import classes from './Main.module.css'


const Oil = (props)=>{

    const [OilData] = useState(data);


  const oilItem = OilData.map(oil => (
    <OilItem
        key={oil.id}
      oil={oil}
    />
  ));

    return(
        <div className={classes.holder}>
            {oilItem}
        </div>
    )
}

export default Oil;