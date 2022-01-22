import React, { useState } from "react";
import TextItem from "./TextItem";

const Text : React.FunctionComponent = () => {
   // local state
   const [value, setValue] = useState<number>(1);

   const changeEvent = (e : React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      if(Number(value) || value === '.'){
         setValue(Number(value));
      }
   }

   return (
      <>
         <TextItem changeEvent={changeEvent} value={value}/>
      </>
   )
}

export default Text;