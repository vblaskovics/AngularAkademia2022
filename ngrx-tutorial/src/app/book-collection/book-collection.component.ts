import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Book} from "../book-list/book.model";
import {map, Observable, tap} from "rxjs";

@Component({
  selector: 'app-book-collection',
  templateUrl: './book-collection.component.html',
  styleUrls: ['./book-collection.component.scss']
})
export class BookCollectionComponent implements OnInit {

  @Input() books$: Observable<(Book | undefined)[]> = new Observable<(Book | undefined)[]>();
  @Output() remove = new EventEmitter<string>();
  @Output() removeAll = new EventEmitter<number>();
  numberOfBooks: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.books$.pipe(
      map((books) => {
        if(books) {
          this.numberOfBooks = books.length;
          return this.numberOfBooks
        }
        return 0;
      }),
      tap(num => console.log(num))
    ).subscribe()
  }

}
