import { useState } from "react";
import { useEffect } from "react";

export function Okkk(){
    const[count , setCount] = useState(0);

    useEffect(()=>{
        document.title =`Counter is inc :${count}`;
    },[count])

    return (
        <>
        <h2> Count = {count}</h2>
        <button onClick = {()=> setCount  (count + 1) }></button>
        <button onClick={()=> setCount  (count  - 1)}></button>
        </>
    )
}