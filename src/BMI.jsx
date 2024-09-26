import {useRef,useState} from "react";
export default function Bmi(){
    const W_input = useRef(null);
    const H_input = useRef(null);
    const [bmi,setbmi] = useState(0);
    const [type,settype] = useState("");
    function handleClick(){
        let w=W_input.current.value;
        let h=H_input.current.value/100;
        setbmi(w/Math.pow(h,2))
        if(w/Math.pow(h,2)<18.5)
        {
            settype("UnderWeight");
        }
        else if(w/Math.pow(h,2)>30)
        {
            settype("OverWeight");
        }
        else{
            settype("Normal");
        }
    }
    return (<>
        <input ref={W_input}type="Number" />
        <br/>
        <input ref={H_input}type="Number"/>
        <br/>
        <button onClick={handleClick}>calculate</button>
        <br/>
        <label>BMI value : {bmi.toFixed(2)}</label>
        <br/>
        <h1>{type}</h1>
    </>)
}