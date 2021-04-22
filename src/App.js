import { useReducer, useState } from "react";
import reducer, {
  initialState,
  ADD,
  DEL,
  COMPLETE,
  UNCOMPLETE,
} from "./reducer";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [newToDo, setNewToDo] = useState("");
  const onSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: ADD, payload: newToDo });
    setNewToDo("");
  };
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewToDo(value);
  };
  return (
    <>
      <h1>Add to do</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="what's to do"
          value={newToDo}
          onChange={onChange}
        />
      </form>
      <ul>
        <h2>To Dos</h2>
        {state.toDos.map((toDo) => (
          <li key={toDo.id}>
            <span>{toDo.text}</span>
            <span onClick={() => dispatch({ type: DEL, payload: toDo.id })}>
              ❌
            </span>
            <span
              onClick={() => dispatch({ type: COMPLETE, payload: toDo.id })}
            >
              ✅
            </span>
          </li>
        ))}
      </ul>
      <ul>
        <h2>
          {state.completed && state.completed.length !== 0 ? "Completed" : ""}
        </h2>
        {state?.completed?.map((toDo) => (
          <li key={toDo.id}>
            <span>{toDo.text}</span>
            <span onClick={() => dispatch({ type: DEL, payload: toDo.id })}>
              ❌
            </span>
            <span
              onClick={() => dispatch({ type: UNCOMPLETE, payload: toDo.id })}
            >
              👻
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
