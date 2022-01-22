import React, { useEffect, useState } from "react";
import css from './Text.module.css';
import { useTypedSelector } from '../../hooks/hooks';

interface ITextItem {
   changeEvent ?: (e : React.ChangeEvent<HTMLInputElement>) => void
   value ?: number
}

const TextItem : React.FunctionComponent<ITextItem> = (
   {changeEvent, value}
   ) => {
   const {firstCurrency, secondCurrency, rate} = useTypedSelector(state => state.currency);
   const {rates} = useTypedSelector(state => state.current);
   const [secondValue, setSecondValue] = useState<number>(rate && rate);

   useEffect(() => {
      setSecondValue(Number((rate * Number(value)).toFixed(3)));
   }, [value, rate])

   if(rates === undefined){
      return <h1>Loading...</h1>;
   }

   return (
      <div className={css.wrapper}>
         <>
         <input className={css.input} 
               value={value && value} 
               onChange={changeEvent}
         />
         <span className={css.text}>
            <span>{rates[firstCurrency]} {firstCurrency} = {
               secondCurrency && (rates[secondCurrency] && rates[secondCurrency])
            } {secondCurrency}</span>
         </span>
         </>
         <>
            <div className={css.logo}>&#8652;</div>
         </>
         <>
         <input className={css.input} 
            value={secondValue} 
            readOnly
         />
         <span className={css.text}>
            <span>{1} {secondCurrency} = {
            secondCurrency && (rates[firstCurrency] / rates[secondCurrency]).toFixed(4)
            } {firstCurrency}</span>
         </span>
         </>
      </div>
   );
}


export default TextItem;