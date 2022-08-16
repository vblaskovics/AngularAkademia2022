import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../model/todo';
import { Users } from '../model/users';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() todo?: Todo
  @Input() users?: Users


  constructor() { }

  ngOnInit(): void {
  }

}
