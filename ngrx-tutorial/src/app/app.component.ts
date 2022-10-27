import { Component } from '@angular/core';
import {BookService} from "./book-list/book.service";
import {Store} from "@ngrx/store";
import {addBook, removeBook, removeBooks, retrievedBookList} from "./state/books.actions";
import {selectBookCollection, selectBooks} from "./state/books.selectors";
import {selectRemoveCounter} from "./state/remove-counter.selector";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  books$ = this.store.select(selectBooks);
  bookCollection$ = this.store.select(selectBookCollection);
  removeCounter$ = this.store.select(selectRemoveCounter);

  onAdd(bookId: string) {
    this.store.dispatch(addBook({ bookId }));
  }

  onRemove(bookId: string) {
    this.store.dispatch(removeBook({ bookId }));
  }

  constructor(
    private booksService: BookService,
    private store: Store
  ) {}

  ngOnInit() {
    this.booksService
      .getBooks()
      .subscribe((books) => this.store.dispatch(retrievedBookList({ books })));
  }

  onRemoveAll(numberOfBooks: number) {

    this.store.dispatch(removeBooks({numberOfBooks}))
  }
}
