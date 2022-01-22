import { Dispatch } from "redux";
import { getConvert, getHistorical } from "../../../api/api";
import { CurrencyAction, CurrencyReducerTypes, ICurrencyConvert, IcurrencyRate } from "./CurrencyReducerActions";
import { IConvert } from "./CurrencyReducerActions";

export const currencyConvert = (data : ICurrencyConvert) : CurrencyAction => {
   return {
      type : CurrencyReducerTypes.CONVERT_CURRENCY,
      payload : {
         firstCurrency : data.firstCurrency,
         secondCurrency : data.secondCurrency
      }
   }
}

const currencyRate = ({rate, date} : IcurrencyRate) : CurrencyAction => {
   return {
      type : CurrencyReducerTypes.RATE_CURRENCY,
      payload : {
         rate : rate,
         date : date ? date : ""
      }
   }
}

export const changeActionFetch = (data : IConvert) => {
   return async (dispatch : Dispatch<CurrencyAction>) => {
      try{
         const response = await getConvert(data);
         const { rate } = response.data.info;
         if(rate !== null){
            dispatch(currencyRate({rate}));
         }
      } catch(e : any){
         alert("Произошла ошибка!");
      }
   }
}

export const historicalActionRate = (data : IConvert) => {
   return async (dispatch : Dispatch<CurrencyAction>) => {
      try{
         const response = await getHistorical(data);
         const [date, rate] = [response.data.date, response.data.rates[data.to]];
         if(rate !== null){
            dispatch(currencyRate({rate,date}));
         }
      } catch(e : any){
         alert("Произошла ошибка!");
      }
   }
}