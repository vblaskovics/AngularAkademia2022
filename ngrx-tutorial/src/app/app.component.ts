import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, tap } from 'rxjs';
import { Book } from './book-list/books.model';
import { BooksService } from './book-list/books.service';
import { selectBookCollection, selectBooks } from './state/books.selectors';
import {
  retrievedBookList,
  addBook,
  removeBook,
} from './state/books.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ngrx-tutorial';

  constructor(private store: Store, private booksService: BooksService) {}

  books$ = this.store.select(selectBooks);
  bookCollection$ = this.store.select(selectBookCollection).pipe(
    map((books: Array<Book | undefined>) => {
      return books.filter((book) => book) as Array<Book>;
    }),
    tap((books: Array<Book>) => {
      console.log('non undefined books', books);
    })
  );

  ngOnInit() {
    this.booksService
      .getBooks()
      .subscribe((books) => this.store.dispatch(retrievedBookList({ books })))
  }
}

