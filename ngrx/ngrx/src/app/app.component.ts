import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BooksService } from './book-list/books.service';
import { retrievedBookList, addBook, removeBook } from './state/books.actions'
import { selectBooks, selectBookCollection } from './state/books.selectors';
import { map, tap } from 'rxjs'
import { Book } from './book-list/books.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngrx';


  constructor(private store: Store, private booksService: BooksService) {

  }


  books$ = this.store.select(selectBooks);
  bookCollection$ = this.store.select(selectBookCollection).pipe
    (map((books: Array<Book | undefined>) => {
      return books.filter((book) => book) as Array<Book>
    }),
    tap((books: Array<Book>) => { console.log('non undefined books', books)})
  );

  onAdd(bookId: string) {
    this.store.dispatch(addBook({bookId}))
  }

  onRemove(bookId: string) {
    this.store.dispatch(removeBook({bookId}))
  }

  ngOnInit() {
    this.booksService
      .getBooks()
      .subscribe((books) => this.store.dispatch(retrievedBookList({ books })))
  }


}
