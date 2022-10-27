import { initialState } from './state/collection.reducer';
import { map, tap } from 'rxjs/operators';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { selectBookCollection, selectBooks } from './state/books.selectors';
import {
  retrievedBookList,
  addBook,
  removeBook,
  removeAllBook,
} from './state/books.actions';
import { BooksService } from './book-list/books.service';
import { Book } from './book-list/books.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'ngrx';

  constructor(private booksService: BooksService, private store: Store) {}

  books$ = this.store.select(selectBooks);
  bookCollection$ = this.store.select(selectBookCollection).pipe(
    map((books: Array<Book | undefined>) => {
      return books.filter((book) => book) as Array<Book>;
    })
    // tap((books: Array<Book>) => {
    //   console.log('non undefined books', books);
    // })
  );

  onAdd(bookId: string) {
    this.store.dispatch(addBook({ bookId }));
  }

  onRemove(bookId: string) {
    this.store.dispatch(removeBook({ bookId }));
  }

  onRemoveAll() {
    this.store.dispatch(removeAllBook());
  }

  ngOnInit() {
    this.booksService
      .getBooks()
      // subscribe helyett effect-el kéne ezt lekezelni!!!
      .subscribe((books) => this.store.dispatch(retrievedBookList({ books })));
  }
}
