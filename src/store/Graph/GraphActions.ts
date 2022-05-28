export interface IGraph {
   start : string 
   end : string
   second : string
}

export interface GraphSuccesAction {
   type : GraphReducerTypes.GRAPH_SUCCESS
   payload : GraphState
}

export enum GraphReducerTypes {
   GRAPH_SUCCESS = `GRAPH_SUCCESS`,
}

export interface GraphState {
   data : any[]
}

export type GraphAction = GraphSuccesAction;