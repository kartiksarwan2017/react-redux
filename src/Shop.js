import React from 'react';

import {useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';

import {actionCreators} from './State/index';

export default function Shop() {
  const dispatch = useDispatch();
  const {depositeMoney,withdrawMoney} = bindActionCreators(actionCreators, dispatch )
  return (
    <>
    <h1>Deposit/Withdraw Money In the Bank</h1>
    <div className="container">
    Deposit Money
     <button className="btn btn-outline-primary m-4" onClick={()=>{depositeMoney(200)}}> + </button> 
     Withdraw Money
     <button className="btn btn-outline-primary m-4" onClick={()=>{withdrawMoney(100)}}> - </button> 
     </div>
    </>
  )
}

