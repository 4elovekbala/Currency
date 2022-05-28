import { GraphAction, GraphState, GraphReducerTypes } from "./GraphActions";

const initialState : GraphState = {
   data : []
}

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



