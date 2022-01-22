import { Dispatch } from "redux";
import { getGraphics } from "../../api/api";

export interface IGraph {
   start : string 
   end : string
   second : string
}

interface GraphSuccesAction {
   type : GraphReducerTypes.GRAPH_SUCCESS
   payload : GraphState
}

export enum GraphReducerTypes {
   GRAPH_SUCCESS = `GRAPH_SUCCESS`,
}

interface GraphState {
   data : any[]
}

const initialState : GraphState = {
   data : []
}

export type GraphAction = GraphSuccesAction;

export const GraphReducer = (state = initialState, action : GraphAction) : GraphState => {
   switch(action.type){
      case GraphReducerTypes.GRAPH_SUCCESS:
         return {
            data : action.payload.data
         };
      default:
         return {
            ...state
         }
   }
}



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
