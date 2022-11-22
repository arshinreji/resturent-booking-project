import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class HangService {

  constructor(private http:HttpClient) { }
// register api
register(body:any){

  return this.http.post<any>('http://localhost:3000/register',body)
}
// spots api
viewallspots(){
  return this.http.get('http://localhost:3000/spots')
}
// Login api
Login(){
  return this.http.get<any>('http://localhost:3000/register')
}
//view product
viewSpots(spotsId:any){
  return this.http.get('http://localhost:3000/spots/'+spotsId)
}
//my-Booking
myBooking(){
  return this.http.get('http://localhost:3000/myBooking')
}
Booking(id:any,name:any,email:any,guestno:any,time:any,date:any,){
  const body={
    id,
                name,
                email,
                guestno,
                time,
                date

  }
  return this.http.post('http://localhost:3000/myBooking',body)
}

}
