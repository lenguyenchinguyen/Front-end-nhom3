import { Component } from '@angular/core';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent {
  data = [
    { id: 1, schoolyear: '2023-2024'},
    { id: 2, schoolyear: '2024-2025'}, 
  ];
}
