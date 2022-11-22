import { Component, OnInit } from '@angular/core';
import { HangService } from '../hang.service';

@Component({
  selector: 'app-my-booking',
  templateUrl: './my-booking.component.html',
  styleUrls: ['./my-booking.component.css']
})
export class MyBookingComponent implements OnInit {
booking:any
  constructor(private hangservice:HangService) { }

  ngOnInit(): void {
    this.hangservice.myBooking().subscribe((data)=>{
    this.booking=data  
    console.log(this.booking);
    
    })
  }

}
