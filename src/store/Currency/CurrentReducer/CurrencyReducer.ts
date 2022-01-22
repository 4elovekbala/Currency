import { CurrencyAction, CurrencyReducerTypes, ICurrency } from "./CurrencyReducerActions"

const initialState : ICurrency = {
   success : false,
   firstCurrency : "",
   secondCurrency : "",
   rate : 0,
   date : "",
}

export const CurrencyReducer = (state = initialState, action : CurrencyAction)  => {
   switch(action.type){
      case CurrencyReducerTypes.CONVERT_CURRENCY:
         return {
            ...state,
            success : true,
            firstCurrency : action.payload.firstCurrency,
            secondCurrency : action.payload.secondCurrency
         }
      case CurrencyReducerTypes.RATE_CURRENCY:
         return {
            ...state,
            rate : action.payload.rate,
            date : action.payload.date,
         }
      default:
         return {
            ...state
         }
   }
}