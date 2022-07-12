import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { IDetailProps, IState } from "../../interfaces/storeInterface";

function Detail({ toDos }: IDetailProps) {
  const { id } = useParams();
  const currentTodo = toDos?.find((el) => el.id === Number(id));
  console.log(toDos);
  return (
    <div>
      <h1>{currentTodo?.text}</h1>
    </div>
  );
}

const mapStateToProps = (state: IState) => {
  return {
    toDos: state.toDos,
  };
};

export default connect(mapStateToProps)(Detail);
