import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpotsRoutingModule } from './spots-routing.module';
import { SpotsComponent } from './spots.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ViewallSpotsComponent } from './viewall-spots/viewall-spots.component';
import { BookingComponent } from './booking/booking.component';
import { MyBookingComponent } from './my-booking/my-booking.component';
import { ViewSpotsComponent } from './view-spots/view-spots.component';
import { CancelBookingComponent } from './cancel-booking/cancel-booking.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SpotsComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    ViewallSpotsComponent,
    BookingComponent,
    MyBookingComponent,
    ViewSpotsComponent,
    CancelBookingComponent
  ],
  imports: [
    CommonModule,
    SpotsRoutingModule,
    ReactiveFormsModule
  ]
})
export class SpotsModule { }
