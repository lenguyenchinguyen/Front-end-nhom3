import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SemesterService } from 'app/@core/services/apis/semester.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {
  constructor(private del: SemesterService, private router: Router){}

  ngOnInit(): void {
    
  }

  deleteSemester(maHK: number){
    this.del.deleteSemester(maHK).subscribe(res => {
      this.router.navigate(['/pages', 'semester', 'list'])
    })
  }
}
