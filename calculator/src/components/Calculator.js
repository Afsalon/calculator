import React,{useReducer} from 'react';
import './calculator.css';
import reducer from './Reducer';
function Calculator(){
  const initialState={
    processedValue:0,
    currentValue:'',
    act:'+'
  }

  const [state,dispatch] = useReducer(reducer,initialState);
  return(
    <div className='container'>
      <div className='output'>
        <div className='processed'>{state.processedValue}</div>
        <div className='current'>{state.currentValue}</div>
      </div>
      <div className='calcbody'>
        <div className='row1'>
          <div><button style={{color:'red'}} className='buttonclass span2' type="button" name="button" onClick={(e)=>dispatch({type:'CLEAR'})}>AC</button></div>
          <div><button className='buttonclass' type="button" name="button" onClick={(e)=>dispatch({type:'REMOVE_DIGIT'})}>DEL</button></div>
          <div><button className='buttonclass buttonclassoperate' type="button" name="button" onClick={(e)=>dispatch({type:'OPERATION',payload:'÷'})}>÷</button></div>
        </div>
        <div className='row2'>
          <div><button className='buttonclass' type="button" name="button" value='1' onClick={(e)=>dispatch({type:'ADD_DIGIT',payload:e.target.value})}>1</button></div>
          <div><button className='buttonclass' type="button" name="button" value='2' onClick={(e)=>dispatch({type:'ADD_DIGIT',payload:e.target.value})}>2</button></div>
          <div><button className='buttonclass' type="button" name="button" value='3' onClick={(e)=>dispatch({type:'ADD_DIGIT',payload:e.target.value})}>3</button></div>
          <div><button className='buttonclass buttonclassoperate' type="button" name="button" onClick={(e)=>dispatch({type:'OPERATION',payload:'x'})}>x</button></div>
        </div>
        <div className='row3'>
          <div><button className='buttonclass' type="button" name="button" value='4' onClick={(e)=>dispatch({type:'ADD_DIGIT',payload:e.target.value})}>4</button></div>
          <div><button className='buttonclass' type="button" name="button" value='5' onClick={(e)=>dispatch({type:'ADD_DIGIT',payload:e.target.value})}>5</button></div>
          <div><button className='buttonclass' type="button" name="button" value='6' onClick={(e)=>dispatch({type:'ADD_DIGIT',payload:e.target.value})}>6</button></div>
          <div><button className='buttonclass buttonclassoperate' type="button" name="button" onClick={(e)=>dispatch({type:'OPERATION',payload:'+'})}>+</button></div>
        </div>
        <div className='row4'>
          <div><button className='buttonclass' type="button" name="button" value='7' onClick={(e)=>dispatch({type:'ADD_DIGIT',payload:e.target.value})}>7</button></div>
          <div><button className='buttonclass' type="button" name="button" value='8' onClick={(e)=>dispatch({type:'ADD_DIGIT',payload:e.target.value})}>8</button></div>
          <div><button className='buttonclass' type="button" name="button" value='9' onClick={(e)=>dispatch({type:'ADD_DIGIT',payload:e.target.value})}>9</button></div>
          <div><button className='buttonclass buttonclassoperate' type="button" name="button" onClick={(e)=>dispatch({type:'OPERATION',payload:'-'})}>-</button></div>
        </div>
        <div className='row5'>
          <div><button className='buttonclass' type="button" name="button" value='.' onClick={(e)=>dispatch({type:'ADD_DIGIT',payload:e.target.value})}>.</button></div>
          <div><button className='buttonclass' type="button" name="button" value='0' onClick={(e)=>dispatch({type:'ADD_DIGIT',payload:e.target.value})}>0</button></div>
          <div><button id='but' className='buttonclass span2 buttonclassoperate' type="button" name="button" onClick={(e)=>dispatch({type:'TOTAL'})}>=</button></div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
