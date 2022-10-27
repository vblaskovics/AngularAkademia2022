import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Book } from './books.model';
import { HttpClient } from '@angular/common/http';
import { booksReducer } from '../state/books.reducer';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) { }

  getBooks() : Observable<Array<Book>> {
    return this.http.get<{ items: Book[] }>(
      'https://www.googleapis.com/books/v1/volumes?maxResults=5&orderBy=relevance&q=oliver%20sacks'
    )
      .pipe(map((books) => books.items ?? []));
  }
}
