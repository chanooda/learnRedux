import { Dispatch } from "react";
import { connect } from "react-redux";
import { ICounterAction, ICounterProps, IDispatch } from "../../Interfaces/counterInterface";
import { down, up } from "./counterSlice";

function Counter({ count, up, down }: ICounterProps) {
  return (
    <div>
      <h2>Counter</h2>
      <button onClick={up}>up</button>
      <span>{count}</span>
      <button onClick={down}>down</button>
    </div>
  );
}

const mapStateToProps = (state: ICounterAction) => {
  return {
    count: state.counter,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<IDispatch>) => {
  return {
    up: () => dispatch(up()),
    down: () => dispatch(down()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
