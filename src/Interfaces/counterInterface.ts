export interface ICounterAction {
  counter: number;
}

export interface IDispatch {
  type: string;
  payload: undefined;
}

export interface ICounterProps {
  count: number;
  up: () => void;
  down: () => void;
}
