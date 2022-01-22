import { rootState } from './../store/store';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

export const useTypedSelector : TypedUseSelectorHook<rootState> = useSelector;