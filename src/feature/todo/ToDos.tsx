import React, { Dispatch, useState } from "react";
import { connect } from "react-redux";
import { add } from "../todo/todoSlice";
import { IState, IToDosProps } from "../../interfaces/storeInterface";
import ToDo from "./ToDo";

function Todo({ toDos, addTodo }: IToDosProps) {
  const [text, setText] = useState("");

  console.log(toDos);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text.length === 0) return;
    setText("");
    addTodo(text);
  };

  return (
    <>
      <h1>ToDo</h1>
      <form onSubmit={onSubmit}>
        <input value={text} onChange={onChange} type="text" />
        <button>add</button>
      </form>
      <ol>
        {toDos.map((toDo) => (
          <ToDo {...toDo} key={toDo.id} />
        ))}
      </ol>
    </>
  );
}

const mapStateToProps = (state: IState) => {
  return {
    toDos: state.toDos,
  };
};
const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    addTodo: (text: string) => dispatch(add({ text, id: Date.now() })),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
