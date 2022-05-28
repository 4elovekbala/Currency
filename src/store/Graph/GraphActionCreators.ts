import { Dispatch } from 'redux';
import { getGraphics } from '../../api/api';
import { GraphAction, GraphReducerTypes, GraphState, IGraph } from "./GraphActions";



const SuccesAction = (data : GraphState) : GraphAction => {
   return {
      type : GraphReducerTypes.GRAPH_SUCCESS,
      payload : data
   }
}


export const fetchGraph = (data : IGraph) => {
   const arr : any[] = [];
   return async (dispatch : Dispatch<GraphAction>) => {
      try{
         const response = await getGraphics(data);
         const obj = response.data.rates;
         for(let item in obj){
            arr.push({name: item.slice(8, item.length), uv: Object.values(obj[item])[0]});
         }
         dispatch(SuccesAction({data : arr}));
      } catch(e : any){
         alert("Произошла Ошибка");
      }
   }
}
