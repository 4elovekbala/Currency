import React, {useEffect} from "react";
import css from './DropdownStyled.module.css';
import { useTypedSelector } from '../../hooks/hooks';
import { useDispatch } from "react-redux";
import { changeActionFetch, currencyConvert } from "../../store/Currency/CurrentReducer/CurrencyReducerActionCreators";


interface IDropdownItem {
   second ?: boolean
   array : string[]
   clickHandler : (e : React.MouseEvent<HTMLDivElement>) => void
   valueClickHandler : (e : React.MouseEvent<HTMLSpanElement | HTMLDivElement>) => void
   value : string | null
   id : string | null
   dropdown : boolean
   setId : React.Dispatch<React.SetStateAction<string | null>>
}


const DropdownItem : React.FunctionComponent<IDropdownItem> = (
   {second, array, clickHandler, valueClickHandler, value, id, dropdown, setId}
   ) => {
   const {
      success, 
      rates, 
      } = useTypedSelector(state => state.current);
   const {rate} = useTypedSelector(state => state.currency);
   const dispatch = useDispatch();

   useEffect(() => {
      if(second){
         setId('USD');
      } else {
         setId('EUR');
      }
   }, []);

   useEffect(() => {
      if(second && id !== null){
         dispatch(currencyConvert({
            firstCurrency : 'EUR',
            secondCurrency : String(id),
         }))
         dispatch(changeActionFetch({
            from : 'EUR',
            to : String(id),
         }))
      } 
   }, [id])
   
   
   return (
      <>
         {
            second === undefined 
               ? <div className={css.wrapper}>
                  <div className={`${css.selectItem} ${css.green}`}>EUR</div>
               </div>
               :  <div className={css.wrapper}>
      {
         array.map((item, index) => {
                  return (
                     <div key={index} 
                        className={`${css.selectItem} ${id === item ? css.green : ""}`}
                        onClick={valueClickHandler}
                        id={item} 
                     >
                           {item}
                     </div>
                  );
               })
      }
      <div onClick={valueClickHandler} 
      className={`${css.selectItem} ${id === value ? css.green : ""}`}>
         {
            value === ''
            ? 'GBP' 
            : value
         }
      </div>
      <div className={`${css.icon} ${css.selectItem}`}
         onClick={clickHandler}
         >
         <span>&#10597;</span>
      </div>
      {
         success 
         ? <div className={css.selectWrapper}>
            {
            dropdown 
            ? <div className={css.select}>
               {
                  Object.entries(rates).map((item, index) => {
                     return <span className={`${css.selectItem} ${css.item}`} 
                              key={index}
                              onClick={valueClickHandler}
                              id={item[0]}
                           >
                           {item[0]}
                           </span>
                  })
               }
               </div>
            : ""
            }
         </div>
         : <h1>Loading...</h1>
      }
      </div>
         }
      </>
   );
}


export default DropdownItem;