
function reducer(state,action){
  if(action.type === 'ADD_DIGIT'){
    const new_value =state.currentValue +action.payload
    return{
      ...state,
      currentValue:new_value,
    }
  }
  if(action.type === 'REMOVE_DIGIT'){
    const len = (state.currentValue.length)-1;
    const new_str =state.currentValue.substring(0,len);
    return{
      ...state,
      currentValue:new_str,
    }
  }
  if(action.type === 'OPERATION'){
    var newValue = 0;
    if (state.act === '+'){
      newValue = parseFloat(state.processedValue) + parseFloat(state.currentValue);
    }
    if (state.act === '-'){
      newValue = parseFloat(state.processedValue) - parseFloat(state.currentValue);
    }
    if (state.act === 'x'){
      newValue = parseFloat(state.processedValue) * parseFloat(state.currentValue);
    }
    if (state.act === '÷'){
      newValue = parseFloat(state.processedValue)/parseFloat(state.currentValue);
    }
    return{
      ...state,
      processedValue:newValue,
      currentValue:'',
      act:action.payload
    }
  }
  if(action.type === 'TOTAL'){
    var total_value = 0;
    if (state.act === '+'){
      total_value = parseFloat(state.processedValue) + parseFloat(state.currentValue);
    }
    if (state.act === '-'){
      total_value = parseFloat(state.processedValue) - parseFloat(state.currentValue);
    }
    if (state.act === 'x'){
      total_value = parseFloat(state.processedValue) * parseFloat(state.currentValue);
    }
    if (state.act === '÷'){
      total_value = parseFloat(state.processedValue)/parseFloat(state.currentValue);
    }
    return{
      ...state,
      processedValue:0,
      currentValue:total_value.toString(),
      act:'+'
    }

  }
  if(action.type === 'CLEAR'){
    return{
      ...state,
      processedValue:0,
      currentValue:'',
      act:'+'
    }

  }
}

export default reducer;
