import { DataServiceService } from './../../services/data-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-box',
  templateUrl: './input-box.component.html',
  styleUrls: ['./input-box.component.css'],
})
export class InputBoxComponent implements OnInit {
  constructor(private dataService: DataServiceService) {}

  ngOnInit(): void {}

  onSubmit() {
    this.dataService.activatedEmitter.next(true);
  }
}
