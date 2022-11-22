import { Component, OnInit } from '@angular/core';
import { HangService } from '../hang.service';

@Component({
  selector: 'app-viewall-spots',
  templateUrl: './viewall-spots.component.html',
  styleUrls: ['./viewall-spots.component.css']
})
export class ViewallSpotsComponent implements OnInit {
spotlist:any
  constructor(private hangservice:HangService) { }

  ngOnInit(): void {
    this.hangservice.viewallspots()
    .subscribe((data)=>{
this.spotlist=data
console.log(this.spotlist);


    })
  
  
  }

  
}
