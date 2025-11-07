import { useState } from "react";

 export function Customhoo(){
    const [count , setcount] = useState(1)

      const increase = ()=>{
        setcount (count + 1)
      }


      return  {count , increase};
      
}
