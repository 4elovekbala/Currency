import React from "react";
import CalendarItem from "../Calendar/Calendar";
import DropdownStyled from "../DropdownStyled/DropdownStyled";
import Graph from "../Graph/Graph";
import RightSide from "../RightSide/RightSide";
import Text from '../Text/Text';
import css from './Currency.module.css';

const Currency : React.FunctionComponent = () => {
   return (
      <div className={css.wrapper}>
         <div className={css.container}>
            <div className={css.inner}>
               <DropdownStyled />
               <CalendarItem />
            </div>
            <div className={css.text}>
               <Text />
            </div>
            <div className={css.inner}>
               <DropdownStyled second={true} />
               <CalendarItem second={true} />
            </div>
            <div className={css.cryptoCurrency}>
               <RightSide />
            </div>
         </div>
         <div className={css.graph}>
            <Graph />
         </div>
      </div>
   )
}

export default Currency;