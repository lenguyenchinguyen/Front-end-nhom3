// import { Component } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { ClassService } from 'app/@core/services/apis/class.service';
// import { ToastrService } from 'ngx-toastr';

// @Component({
//   selector: 'app-delete',
//   templateUrl: './delete.component.html',
//   styleUrls: ['./delete.component.scss']
// })
// export class DeleteComponent {
//     constructor(
//       private classes: ClassService,
//       private route : ActivatedRoute,
//       private router: Router,
//       private toastr: ToastrService,
      
//     ){}

//     deleteClass() {
//       let id =+ this.route.snapshot.params['id'];
//       this.classes.deleteClass(id).subscribe(res =>{
//         this.toastr.success('Success')
//           this.router.navigate(['/pages/dslop/list']);
//       },error => {
//         console.error(error)
//       });
//     }
// }
import { Component } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
})
export class DeleteComponent {
  constructor(protected ref: NbDialogRef<DeleteComponent>) { }

  confirm() {
    this.ref.close(true);
  }

  cancel() {
    this.ref.close(false);
  }
}
