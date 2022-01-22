import React, {useEffect, useState} from "react";
import { useDispatch } from "react-redux";
import DropdownItem from "./DropdownItem";
import { useTypedSelector } from "../../hooks/hooks";
import { fetchCurrent } from "../../store/CurrentReducer/CurrentActionCreators";



interface IDropdown {
   second ?: boolean
}

const DropdownStyled : React.FunctionComponent<IDropdown> = ({second}) => {
   const {firstCurrency, secondCurrency} = useTypedSelector(state => state.currency);
   const dispatch = useDispatch();
   // local state
   const array : string[] = ['USD', 'KZT', 'BTC'];

   const [value, setValue] = useState<string | null>('');
   const [secondvalue, setSecondValue] = useState<string | null>('')

   const [id, setId] = useState<string | null>('');
   const [secondId, setSecondId] = useState<string | null>('');
   
   const [dropdown, setDropdown] = useState<boolean>(false);

   const clickHandler = (e : React.MouseEvent<HTMLDivElement>) : void => {
      setDropdown(!dropdown);
   }

   const valueClickHandler = (e : React.MouseEvent<HTMLSpanElement | HTMLDivElement>) : void => {
      const target : string | null = e.currentTarget.textContent;
      if(!array.includes(String(target))){
         setValue(target);
      }
      setId(target);
      setDropdown(false);
   }

   const secondValueClickHandler = (e : React.MouseEvent<HTMLSpanElement | HTMLDivElement>) : void => {
      const target : string | null = e.currentTarget.textContent;
      if(!array.includes(String(target))){
         setSecondValue(target);
      }
      setSecondId(target);
      setDropdown(false);
   }

   useEffect(() => {
      dispatch(fetchCurrent());
   }, [])


   return (
      <>
         {
            second
            ? <DropdownItem array={array} 
               clickHandler={clickHandler} 
               valueClickHandler={secondValueClickHandler} 
               value={secondvalue}
               id={secondId} 
               dropdown={dropdown}
               setId={setSecondId}
               second={true} />
            : <DropdownItem array={array} 
               clickHandler={clickHandler} 
               valueClickHandler={valueClickHandler} 
               value={value}
               id={id}
               dropdown={dropdown}
               setId={setId}
               /> 
         }
      </>
   );
}

export default DropdownStyled;