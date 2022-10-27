import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../book-list/books.model';

@Component({
  selector: 'app-book-collection',
  templateUrl: './book-collection.component.html',
  styleUrls: ['./book-collection.component.css']
})
export class BookCollectionComponent implements OnInit {

  @Input() books: ReadonlyArray<Book> = [];
  @Output() remove = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

}
