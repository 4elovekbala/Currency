export interface ICurrency { 
   success : boolean
   firstCurrency : string
   secondCurrency : string
   rate : number
   date ?: string
}

export interface IConvert {
   from : string 
   to : string
   date ?: string 
}

export interface IcurrencyRate{
   rate : number
   date ?: string
}

export interface ICurrencyConvert {
   firstCurrency : string
   secondCurrency : string
}

export enum CurrencyReducerTypes {
   CONVERT_CURRENCY = `CONVERT_CURRENCY`,
   RATE_CURRENCY = `RATE_CURRENCY`,
}

interface GetCurrency {
   type : CurrencyReducerTypes.CONVERT_CURRENCY,
   payload : {
      firstCurrency : string 
      secondCurrency : string
   }
}

interface GetRate {
   type : CurrencyReducerTypes.RATE_CURRENCY,
   payload : {
      rate : number
      date ?: string
   }
}

export type CurrencyAction = GetCurrency | GetRate;