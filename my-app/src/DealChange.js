import React, { useState } from 'react';
import main from "./App.module.css"; 
function DealChange({id, text, changeField, type, deleteDeal}) {
    const [isEdit, setEdit] = useState(false);

    return <li className={main.part} key={id}>
        {isEdit ?
        <input value={text} onChange={event=> changeField(id, event.target.value, type)} onBlur={()=> setEdit(false)}/>
        : <span onClick={()=> setEdit(true)}>{text}</span>}
        <button className={main.delete} onClick={()=> deleteDeal(id)}>Delete</button>
    </li>
}
export default DealChange;
