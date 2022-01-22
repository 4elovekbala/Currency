import React, {useState} from "react";
import Calendar, { DateCallback } from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/hooks";
import { historicalActionRate } from "../../store/Currency/CurrentReducer/CurrencyReducerActionCreators";
import Button from "./Button";
import css from './CalendarItem.module.css';

interface ICalendar {
   second ?: boolean
}

const CalendarItem : React.FunctionComponent<ICalendar> = ({ second }) => {

   const {data} = useTypedSelector(state => state.graph);
   const {firstCurrency, secondCurrency, date} = useTypedSelector(state => state.currency);
   const dispatch = useDispatch();

   const [value, setValue] = useState<Date>(new Date());

   const getMaxOrMinOfArray = (arr : any[], max : boolean) : number => {
      let array : number[] = [];
      for(let key in arr){
         array.push(Number(arr[key].uv));
      }
      if(max){
         return Math.max.apply(null, array);
      } else {
         return Math.min.apply(null, array);
      }
   }


   const clickHandler = (value : Date, e : React.MouseEvent<HTMLButtonElement>) => {
      const currentDate = new Date();
      const date = `${value.getFullYear()}-${value.getMonth() + 1 < 10 ? "0"+(value.getMonth() + 1) : value.getMonth() + 1}-${value.getDate()}`;
      if(currentDate.getTime() >= value.getTime()){
         dispatch(historicalActionRate({
            from : firstCurrency,
            to : secondCurrency,
            date : date,
         }));
      }
   }

   return (
      <>
         {
         second 
         ? <div className={css.dateInfo}>
            {
               date 
                  ? <Button date={date} symbol="-"/> 
                  : <Button value={value} symbol="-"/>
            }
         </div>
         : <div className={css.calendarWrapper}>
            <div className={css.adInfo}>
                  MAX : {getMaxOrMinOfArray(data, true) + " "}
                  MIN : {getMaxOrMinOfArray(data, false)}
            </div>
            <Calendar 
                  className={css.calendar}
                  onChange={setValue}
                  value={value}
                  onClickDay={clickHandler}	
               /> 
         </div>
         }
      </>
   )
}


export default CalendarItem;