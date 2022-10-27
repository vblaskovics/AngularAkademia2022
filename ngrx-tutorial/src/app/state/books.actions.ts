import {createAction, props} from "@ngrx/store";
import {Book} from "../book-list/book.model";

export const addBook = createAction(
  '[Book List] Add Book',
  props<{ bookId: string }>()
);

export const removeBook = createAction(
  '[Book Collection] Remove Book',
  props<{ bookId: string }>()
);

export const removeBooks = createAction(
  '[Book Collection] Remove all books',
  props<{ numberOfBooks: number }>()
)

export const retrievedBookList = createAction(
  '[Book List/API] Retrieve Books Success',
  props<{ books: ReadonlyArray<Book> }>()
);

