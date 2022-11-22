// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { HangService } from '../hang.service';

// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.css']
// })
// export class RegisterComponent implements OnInit {
//   name=""
// email=""
// Password=""
// registerForm = this.formbuilder.group({
//   name:["",[Validators.required,Validators.pattern('[a-zA-Z]*')]],
//   email:["",[Validators.required,Validators.pattern('[a-z0-9.%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
//   Password:["",[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
// })
//   constructor( private formbuilder:FormBuilder,private hangservice:HangService,private router:Router) { }

//   ngOnInit(): void {
//   }
// register(){
// console.log(this.registerForm.value);

//   var email=this.registerForm.value.email
//   var name=this.registerForm.value.name
//   var Password=this.registerForm.value.Password

//   if(this.registerForm.valid){
//     //asincronouse
//     this.hangservice.register(name,email,Password)
//     .subscribe((result:any)=>{
//       alert(result.message)
//       this.router.navigateByUrl('')
//     },
//     //status 400
//     result=>{
//       alert(result.error.message)
//     }
//     )

//   }
//     else{
//       alert('form invalid')
//     }
//   }
//   Login(){
//        this.router.navigate(["/spots/login"])
//         }

// }

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HangService } from '../hang.service';
import {
  FormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  public registerForm!: FormGroup;
  constructor(
    private http: HttpClient,
    private router: Router,
    private hangservice: HangService,
    private Formbuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.registerForm = this.Formbuilder.group({
      name: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
      email: [ '',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$')]],
      password: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
    });
  }
  Login() {
    this.router.navigate(['/spots/login']);
  }
  register() {

    var body = this.registerForm.value;
console.log(body);

    this.hangservice.register(body)
    .subscribe((res)=>{
if(res){
    alert('register Successfully');
      this.router.navigateByUrl('spots/login');
}
else{
alert("something went wrong")
}
    });
  }
}
