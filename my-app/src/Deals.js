import DealChange from './DealChange';
import React from 'react';

function Deals({ id, text, changeField, deleteDeal}) {
    return <DealChange id={id} text={text} changeField={changeField} type="text" deleteDeal={deleteDeal}/>
   
    
}

export default Deals;
