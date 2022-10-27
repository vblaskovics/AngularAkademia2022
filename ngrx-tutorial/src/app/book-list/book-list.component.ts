import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Book} from "./book.model";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  @Input() books: ReadonlyArray<Book | undefined> = [];
  @Output() add: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }



}
