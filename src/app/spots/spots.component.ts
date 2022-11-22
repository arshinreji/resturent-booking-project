import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-spots',
  templateUrl: './spots.component.html',
  styleUrls: ['./spots.component.css']
})
export class SpotsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  Login(){
    this.router.navigate(["/spots/login"])
    }

}
