import { Dispatch } from "@reduxjs/toolkit";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { remove } from "../todo/todoSlice";
import { IToDoProps, IToDoState } from "../../interfaces/storeInterface";

function ToDo({ text, id, deleteToDo }: IToDoProps) {
  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={deleteToDo}>DEL</button>
    </li>
  );
}

const mapDispatchToProps = (dispatch: Dispatch, ownProps: IToDoState) => {
  return {
    deleteToDo: () => {
      dispatch(remove({ id: ownProps.id, text: "" }));
    },
  };
};

export default connect(null, mapDispatchToProps)(ToDo);
