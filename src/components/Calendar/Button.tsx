import React from 'react';

interface IButton {
   value ?: Date
   date ?: string
   symbol : string
}

const Button : React.FunctionComponent<IButton> = ({value, symbol, date}) => {
   return (
      <>
         {
            value !== undefined 
               ? <>
                  <span>{value.getFullYear()}{symbol}</span>
                  <span>{value.getMonth() + 1 < 10 ? "0" + (value.getMonth() + 1) : value.getMonth() + 1}{symbol}</span>
                  <span>{value.getDate()}</span>
                 </> 
               : <span>{date}</span>
         }
      </>
   )
}


export default Button;