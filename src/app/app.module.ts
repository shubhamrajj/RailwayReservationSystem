import { NgModule } from '@angular/core'; 
import { BrowserModule } from '@angular/platform-browser'; 
 
import { AppRoutingModule } from './app-routing.module'; 
import { AppComponent } from './app.component'; 
import { AboutComponent } from './MyComponents/about/about.component'; 
import { HomeComponent } from './home/home.component'; 
import { SignupComponent } from './signup/signup.component'; 
import { SigninComponent } from './signin/signin.component';
import { CustomerhomeComponent } from './customerhome/customerhome.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { BookticketComponent } from './bookticket/bookticket.component';
import { ViewbookingsComponent } from './viewbookings/viewbookings.component';
import { CustomerhelpComponent } from './customerhelp/customerhelp.component';
import { ViewdetailsComponent } from './viewdetails/viewdetails.component';
import { AddtrainComponent } from './addtrain/addtrain.component';
import { DeletetrainComponent } from './deletetrain/deletetrain.component';
import { UpdatetraindetailsComponent } from './updatetraindetails/updatetraindetails.component';
import { ViewparticulartrainComponent } from './viewparticulartrain/viewparticulartrain.component';
import { ViewalltrainsComponent } from './viewalltrains/viewalltrains.component';
import { DeletecustomerComponent } from './deletecustomer/deletecustomer.component';
import { ViewparticularcustomerComponent } from './viewparticularcustomer/viewparticularcustomer.component';
import { ViewallcustomersComponent } from './viewallcustomers/viewallcustomers.component';
import { SearchtrainsComponent } from './searchtrains/searchtrains.component';
import { PaymentComponent } from './payment/payment.component';
import { UpdatecustomerdetailsComponent } from './updatecustomerdetails/updatecustomerdetails.component';
import { ChangeparticulartraindetailsComponent } from './changeparticulartraindetails/changeparticulartraindetails.component';
import { ViewoneparticulartrainComponent } from './viewoneparticulartrain/viewoneparticulartrain.component';
import { ViewoneparticularcustomerComponent } from './viewoneparticularcustomer/viewoneparticularcustomer.component'; 
import { RailwayApiService } from './railway-api.service';
import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './services/auth.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { AdminComponent } from './admin/admin.component';
import { CommonModule } from '@angular/common'; 


@NgModule({ 
  declarations: [ 
    AppComponent, 
    AboutComponent, 
    HomeComponent, 
    SignupComponent, 
    SigninComponent, 
    CustomerhomeComponent, 
    AdminhomeComponent, 
    BookticketComponent, 
    ViewbookingsComponent, 
    CustomerhelpComponent, 
    ViewdetailsComponent, 
    AddtrainComponent, 
    DeletetrainComponent, 
    UpdatetraindetailsComponent, 
    ViewparticulartrainComponent, 
    ViewalltrainsComponent, 
    DeletecustomerComponent, 
    ViewparticularcustomerComponent, 
    ViewallcustomersComponent, 
    SearchtrainsComponent, 
    PaymentComponent, 
    UpdatecustomerdetailsComponent, 
    ChangeparticulartraindetailsComponent, 
    ViewoneparticulartrainComponent, 
    ViewoneparticularcustomerComponent, AdminComponent,
  ], 
  imports: [ 
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule
  ], 
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
    
  ], 
  bootstrap: [AppComponent] 
}) 
export class AppModule { }
