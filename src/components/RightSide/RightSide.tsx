import { useEffect, useState } from 'react';
import css from './RightSide.module.css';

const RightSide : React.FunctionComponent = () => {
   const [array, setArray] = useState<Array<[string, number]>>([]);

   const getBitcoinRate = () => {
      const url = "https://api.cryptapi.io/btc/info/";
      fetch(url)
      .then(response => response.json())
      .then(data => setArray(Object.entries(data.prices)));
   }

   useEffect(() => {
      getBitcoinRate();
   }, [])
   
   return (
      <>
         {
            array && array.map((item, index) => {
               return (
                  <h5 key={index} className={css.cryptoItem}>1 BTC = {item[1]} {item[0]}</h5>
               );
            })
         }
      </>
   );
}


export default RightSide;