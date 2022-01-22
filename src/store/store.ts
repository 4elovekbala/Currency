import { CurrencyReducer } from './Currency/CurrentReducer/CurrencyReducer';
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import { CurrentReducer } from './CurrentReducer/CurrentReducer';
import { GraphReducer } from './Graph/Graph';

const rootReducer = combineReducers({
   current : CurrentReducer,
   currency : CurrencyReducer,
   graph : GraphReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));


export type rootState = ReturnType<typeof rootReducer>;
