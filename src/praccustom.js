import { Customhoo } from "./customhook";

 export function Praccus(){
    const pio = Customhoo()

    const pio2 = Customhoo()

    return <>
    <h5>CUSTOM COUNT : {pio.count}</h5>
    <button type="button" onClick={pio.increase}>inc </button>

    <h6>Count ++ {pio2.count}</h6>
    <button type="button" onClick={pio2.increase}>inc </button>
    </>
}