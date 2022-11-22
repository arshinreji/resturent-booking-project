
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { HangService } from '../hang.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public loginForm!:FormGroup

  constructor(private http:HttpClient , private router:Router,private hangservice:HangService,private Formbuilder:FormBuilder ) {
}
  ngOnInit(): void {
    this.loginForm=this.Formbuilder.group({
      email:["",[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      password:["",[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
     })
  }


  login() {
console.log(this.loginForm.value);

    this.hangservice.Login()
      .subscribe(res=> {
console.log(res);
  const user = res.find ((a:any) => {
          return a.email===this.loginForm.value.email && a.password === this.loginForm.value.password
        })
        if (user) {
          alert("login successfully");
          this.loginForm.reset();
          this.router.navigate(['spots/viewall-spots']);
        }
        else {
          alert("user doesnot exist")
        }
      }, err => {
        alert("somthing went wrong")
      })
    }
    register() {
      this.router.navigate(['/spots/register']);
    }
  }
