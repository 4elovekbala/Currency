export interface CurrentState {
   success : boolean
   date : string
   error ?: string
   rates : Irates
   base : string
}

interface Irates {
   [key: string]: number | any
}


export enum CurrentReducerTypes {
   FETCH_SUCCESS = `FETCH_SUCCESS`,
   FETCH_ERROR = `FETCH_ERROR`,
   FETCH_CHANGE = `FETCH_CHANGE`,
}

interface FetchSuccesCurrentAction {
   type : CurrentReducerTypes.FETCH_SUCCESS
   payload : CurrentState
}

interface FetchErrorCurrentAction {
   type : CurrentReducerTypes.FETCH_ERROR
   payload : string
}




export type CurrentAction = FetchSuccesCurrentAction | FetchErrorCurrentAction;

