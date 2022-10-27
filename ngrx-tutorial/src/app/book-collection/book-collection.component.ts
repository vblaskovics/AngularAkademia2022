import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Book} from "../book-list/book.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-book-collection',
  templateUrl: './book-collection.component.html',
  styleUrls: ['./book-collection.component.scss']
})
export class BookCollectionComponent implements OnInit {

  @Input() books$: Observable<(Book | undefined)[]> = new Observable<(Book | undefined)[]>();
  @Output() remove = new EventEmitter<string>();
  @Output() removeAll = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

}
