import { CurrentState, CurrentReducerTypes, CurrentAction } from "./CurrentReducerActions"

const initialState : CurrentState = {
   success : false,
   date : "",
   rates : {},
   base : "",
}

export const CurrentReducer = (state = initialState, action : CurrentAction) : CurrentState => {
   switch(action.type){
      case CurrentReducerTypes.FETCH_SUCCESS:
         return {
            ...state,
            success : action.payload.success,
            date : action.payload.date,
            rates : action.payload.rates,
            base : action.payload.base,
         };
      case CurrentReducerTypes.FETCH_ERROR:
         return {
            ...state,
            error : action.payload,
         };
      default:
         return {
            ...state
         }
   }
}