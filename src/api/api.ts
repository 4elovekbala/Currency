import axios from "axios";
import { IConvert } from "../store/Currency/CurrentReducer/CurrencyReducerActions";
import { IGraph } from "../store/Graph/GraphActions";

const instanse = axios.create({
  baseURL: 'https://api.exchangerate.host/'
});


export const getLatest = () : any => {
   return instanse.get(`latest`);
} 

export const getSymbols = () : any => {
   return instanse.get('symbols')
}

export const getConvert = ({from, to} : IConvert) : any => {
   return instanse.get(`convert?from=${from}&to=${to}`);
}

export const getGraphics = ({start, end, second} : IGraph) : any => {
   return instanse.get(`timeseries?start_date=${start}&end_date=${end}&symbols=${second}`);
}

export const getHistorical = ({to, date} : IConvert) : any => {
   return instanse.get(`${date}?symbols=${to}`);
}
