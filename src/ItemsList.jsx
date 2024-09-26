import { useState } from "react";
import { useEffect } from "react";
function Item({name,isPackes}){
return (<li>
    {isPackes ? name + '✅' : name}
    </li>);
}

export default function ItemList(){
    const [val,setval] = useState("");
    useEffect(()=>{
        console.log("this loaded");
    })
    const items = [{name:"Sunglass",isPackes:false},{name:"Sunblock",isPackes:true},{name:"Towel",isPackes:true},{name:"Swimming",isPackes:true}]
    const filterlist = items.filter(i => i.name.toLowerCase().includes(val.toLowerCase()))
    const listitmes = filterlist.map(items => <Item key={items.name} name={items.name} isPackes={items.isPackes}/>)
    return (<>
        <input type="text" onChange={e=>{setval(e.target.value)}}/>
        <ui>
        {listitmes}
        </ui>
    </>)
}