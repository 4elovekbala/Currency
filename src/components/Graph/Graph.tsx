import React, {useEffect, useState} from 'react';
import css from './Graph.module.css';
import { CartesianGrid, Line, LineChart, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/hooks';
import { fetchGraph } from '../../store/Graph/GraphActionCreators';
import { changeDateType } from '../../helpers/utils';

const Graph : React.FunctionComponent = () => {
   //global state
   const { data } = useTypedSelector(state => state.graph);
   const {firstCurrency, secondCurrency} = useTypedSelector(state => state.currency);
   const dispatch = useDispatch();
   
   const [select, setSelect] = useState<string>('30');

   const changeHandler = (e : React.ChangeEvent<HTMLSelectElement>) => {
      setSelect(e.target.value);
   }
   
   const getDates = (days : string) => {
      const date = new Date();
      let d = new Date();
      if(days === "30"){
         d.setMonth(d.getMonth() - 1);
      } else if(days === "60"){
         d.setMonth(d.getMonth() - 2);
      } else if(days === "90"){
         d.setMonth(d.getMonth() - 3);
      }
      return {
         start : changeDateType(d),
         end : changeDateType(date),
      }
   }

   useEffect(() => {
      const {start, end} = getDates(select);
      if(firstCurrency !== "" && secondCurrency !== ""){
         dispatch(fetchGraph({
            start : start,
            end : end,
            second : secondCurrency,
         }));
      }
   }, [secondCurrency, select]);

   return (
      <>
         <>
            <h6 className={css.title}>{firstCurrency} exchange rate in {secondCurrency}</h6>
            <select value={select} onChange={changeHandler}>
               <option value="30">30</option>
               <option value="60">60</option>
               <option value="90">90</option>
            </select>
         </>
         <>
            <LineChart width={720} height={250} data={data && data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
               <Line type="monotone" dataKey="uv" stroke="#8884d8" />
               <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
               <XAxis dataKey="name" />
               <YAxis />
               <Tooltip />
            </LineChart>
         </>
      </>
   );
}

export default Graph;