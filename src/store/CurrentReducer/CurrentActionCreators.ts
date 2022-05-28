import { Dispatch } from 'redux';
import { getLatest } from '../../api/api';
import { CurrentReducerTypes, CurrentState, CurrentAction } from "./CurrentReducerActions"

const SuccesAction = (data : CurrentState) : CurrentAction => {
   return {
      type : CurrentReducerTypes.FETCH_SUCCESS,
      payload : data
   }
}

const ErrorAction = (error : string) : CurrentAction => {
   return {
      type : CurrentReducerTypes.FETCH_ERROR,
      payload : error
   }
}


export const fetchCurrent = () => {
   return async (dispatch : Dispatch<CurrentAction>) => {
      try{
         const response = await getLatest();
         dispatch(SuccesAction(response.data));
      } catch(e : any){
         dispatch(ErrorAction("Произошла Ошибка"));
      }
   }
}
