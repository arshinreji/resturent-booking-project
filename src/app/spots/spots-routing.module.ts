import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { CancelBookingComponent } from './cancel-booking/cancel-booking.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MyBookingComponent } from './my-booking/my-booking.component';
import { RegisterComponent } from './register/register.component';
import { SpotsComponent } from './spots.component';
import { ViewSpotsComponent } from './view-spots/view-spots.component';
import { ViewallSpotsComponent } from './viewall-spots/viewall-spots.component';

const routes: Routes = [
{ path: '', component: HomeComponent },
{ path: 'login', component: LoginComponent },
{ path: 'register', component: RegisterComponent },
{ path: 'my-booking', component: MyBookingComponent },
{ path: 'booking', component: BookingComponent },
{ path: 'view-spots/:id', component: ViewSpotsComponent },
{ path: 'viewall-spots', component: ViewallSpotsComponent },
{ path: 'cancel-booking', component: CancelBookingComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpotsRoutingModule { }
