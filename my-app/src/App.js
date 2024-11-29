import main from "./App.module.css"; 
import React, { useState } from 'react';
import Deals from './Deals';
import {nanoid} from 'nanoid';
function id() {
	return nanoid();
	}	
function App() {
  const [deals, setDeals] = useState([]);
  const [value, setValue] = useState('');
  function createDeal(value) {
    const obj = {
      id: id(),
      text: value
    }
    setDeals([...deals, obj])
    setValue('');
  }
  function changeField(id,event,type) {
    setDeals([...deals].map(deal=>{
      if(deal.id===id) {
        deal[type] = event;
      }
      return deal;
    }))
  }
  function deleteDeal(id) {
    setDeals([...deals].filter(deal=>
      deal.id!==id
    ))
  }
  const rows = deals.map(deal=>{
    return <Deals
      key={deal.id}
      id={deal.id}
      text={deal.text} 
      changeField={changeField}
      deleteDeal={deleteDeal}
      />
  
  })
  return <main> 
    <div className={main.topMain}>
      <h1>Чеклист</h1>
      <input className={main.inpMain} value={value} onChange={event=> setValue(event.target.value)}/>
      <button onClick={()=>createDeal(value)}>+</button> 
    </div>
    <div>
      <ul>
        {rows}
      </ul>
    </div>
  </main>
}

export default App;
