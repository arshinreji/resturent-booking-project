import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HangService } from '../hang.service';

@Component({
  selector: 'app-view-spots',
  templateUrl: './view-spots.component.html',
  styleUrls: ['./view-spots.component.css']
})
export class ViewSpotsComponent implements OnInit {
spotId:any
spotDetails:any
  constructor(private router:Router,private hangservice:HangService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data)=>{
      this.spotId=data['id']
      console.log(this.spotId);
      this.hangservice.viewSpots(this.spotId)
      .subscribe((data)=>{
        this.spotDetails=data  
      })
      
    })
    
    
   
  }
  booking(){
    this.router.navigate(['/spots/booking'])
  }
 

}
