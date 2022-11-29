import { useReducer, useEffect } from "react";
import { validate } from "../../util/validator";
import "./Input.css";

const InputReducer = (state, action) => {
  /* `switch` is a conditional statement that is used to check if the value of the `action.type` is
    equal to the value of the `case`. If it is, then the code inside the `case` will be executed. */
  switch (action.type) {
    case "CHANGE":
      return {
        /* `...state` is a spread operator that is used to copy the properties of the `state` object. */
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators),
      };
    case "TOUCH":
      return {
        ...state,
        isTouched: true,
      };
    default:
      return state;
  }
};

const Input = (props) => {
  const [inputState, dispatch] = useReducer(InputReducer, {
    value: props.initialValue || "",
    isTouched: false,
    isValid: props.initialValid || false,
  });

  // give it useEffect 
  const {id, onInput} = props;
  const {value, isValid} = inputState;

  /* `useEffect` is a hook that is used to run a function after the component is rendered. execute some logic with given dependencies  */
  useEffect(() => {
    onInput(id,value,isValid)
  }, [id,value,isValid, onInput])

  const changeHandler = (event) => {
    /* `dispatch` is a function that is used to execute the `InputReducer` function. */
    dispatch({
      type: "CHANGE",
      val: event.target.value,
      validators: props.validators,
    });
  };

  const touchHandler = () => {
    dispatch({
      type: "TOUCH",
    });
  };

  const element =
    props.element === "input" ? (
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
      />
    ) : (
      <textarea
        id={props.id}
        rows={props.rows || 3}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
      />
    );
  return (
    <div
      className={`form-control ${
        !inputState.isValid && inputState.isTouched && "form-control--invalid" // if there is a err apliq invalid class
      }`}
    >
      <label
        /* `htmlFor` is a prop that is used to link the label to the input. */
        htmlFor={props.id}
      >
        {props.label}
      </label>
      {element}
      {!inputState.isValid && inputState.isTouched && <p>{props.errorText}</p>}
    </div>
  );
};

export default Input;
