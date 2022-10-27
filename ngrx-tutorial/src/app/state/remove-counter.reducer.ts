import {createReducer, on} from "@ngrx/store";
import {removeBook, removeBooks} from "./books.actions";

export const initialState: number = 0;

export const removeCounterReducer = createReducer(
  initialState,
  on(removeBook, (state) => {
    return state + 1
  }),
  on(removeBooks, (state, {numberOfBooks}) => {
    return state + numberOfBooks;
  })
);
