import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Book } from '../book-list/books.model';

// export végi string az app.module-os elnevezésből jön!!!!
export const selectBooks = createFeatureSelector<ReadonlyArray<Book>>('books');
// export const selectBooks = createFeatureSelector<readonly Book[]>('books');

export const selectCollectionState =
  createFeatureSelector<ReadonlyArray<string>>('collection');

export const selectBookCollection = createSelector(
  selectBooks,
  selectCollectionState,
  // (books, collection) => {return collection.map((id) => books.find((book) => book.id === id));}
  (b, c) => {
    return c.map((id) => b.find((book) => book.id === id));
  }
);
