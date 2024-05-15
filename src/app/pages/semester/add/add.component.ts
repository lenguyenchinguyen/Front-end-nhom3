import { Component } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {
  data = [
    { id: 1, schoolyear: '2023-2024'},
    { id: 2, schoolyear: '2024-2025'}, 
  ];
}
