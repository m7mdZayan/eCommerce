import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-useredit',
  templateUrl: './useredit.component.html',
  styleUrls: ['./useredit.component.css']
})
export class UsereditComponent implements OnInit {
  id:any;
  user:any;
  editUser = new FormGroup({
    name : new FormControl(''),
    email : new FormControl(''),
    phone : new FormControl(''),
    address : new FormControl(''),

  });
  constructor(private myActivated : ActivatedRoute, private myService: UserService, private router :Router) {
    this.id= myActivated.snapshot.params.id;
   }

  ngOnInit(): void {
    this.myService.getUser(this.id).subscribe(
      (res)=>{
        this.user=(res);
        console.log(res);
        this.editUser = new FormGroup({
          name : new FormControl(this.user.user.name),
          email : new FormControl(this.user.user.email),
          // phone : new FormControl('(+20)-102-557-9633'),
          // address : new FormControl('Mansoura'),

        });
      },
      (err)=>{console.log(err)}
    )

    


    // this.myService.editUser(this.id,this.body).subscribe(
    //   (res)=>{console.log(res)},
    //   (err)=>{console.log(err)}
    // )
  }

  collection(){
      console.log(this.editUser.value);
      this.myService.editUser(this.id,this.editUser.value).subscribe(
          (res)=>{console.log(res)},
          (err)=>{console.log(err)}
        )
        this.router.navigateByUrl('/users/'+this.id);
  }

  cancel(){
    this.router.navigateByUrl('/users/'+this.id);
  }
}
