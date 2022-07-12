export interface IToDoState {
  text: string;
  id: number;
}

export interface IToDo {
  type: string;
  text: string;
  id: number;
}

export interface IToDosProps {
  toDos: IToDoState[];
  addTodo: (text: string) => void;
}

export interface IToDoProps {
  text: string;
  id: number;
  deleteToDo: () => void;
}

export interface IDetailProps {
  toDos: IToDoState[];
}

export interface IState {
  toDos: IToDoState[];
}
