import { useCallback, useReducer } from "react";

const FormReducer = (state, action) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      let formIsValid = true;
      for (const inputId in state.inputs) { // for in lop
        if(!state.inputs[inputId]){ // it;s in name property in login to donot check it
            continue;
        }
        if (inputId === action.inputId) {
          formIsValid = formIsValid && action.isValid;
        } else {
          formIsValid = formIsValid && state.inputs[inputId].isValid;
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: { value: action.value, isValid: action.isValid },
        },
        isValid: formIsValid,
      };
      case "SET_DATA":
        return {
            inputs : action.inputs,
            isValid : action.formIsValid
        }
    default:
      return state;
  }
};

export const useForm = (initialInputs, initialFormValidity) => { // this is my hook // restrit using hooks
  const [formState, dispatch] = useReducer(FormReducer, {
    inputs: initialInputs,
    isValid: initialFormValidity,
  });
                      // to avoid infinte loop before useEffect
  const InputHandler = useCallback((id, value, isValid) => {
    dispatch({
      type: "INPUT_CHANGE",
      value: value,
      isValid: isValid,
      inputId: id,
    });
  }, []);

  const setFormData = useCallback((inputData, formValidity) => {
    dispatch({
      type: "SET_DATA",
      inputs: inputData,
      formIsValid : formValidity
    });
  }, []);

  return [formState, InputHandler, setFormData];
};
