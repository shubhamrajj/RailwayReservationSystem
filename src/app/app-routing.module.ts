import { NgModule } from '@angular/core'; 
import { RouterModule, Routes } from '@angular/router'; 
import { AddtrainComponent } from './addtrain/addtrain.component';
import { AdminComponent } from './admin/admin.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { BookticketComponent } from './bookticket/bookticket.component';
import { ChangeparticulartraindetailsComponent } from './changeparticulartraindetails/changeparticulartraindetails.component';
import { CustomerhelpComponent } from './customerhelp/customerhelp.component';
import { CustomerhomeComponent } from './customerhome/customerhome.component';
import { DeletecustomerComponent } from './deletecustomer/deletecustomer.component';
import { DeletetrainComponent } from './deletetrain/deletetrain.component';
import { HomeComponent } from './home/home.component'; 
import { AboutComponent } from './MyComponents/about/about.component'; 
import { PaymentComponent } from './payment/payment.component';
import { SearchtrainsComponent } from './searchtrains/searchtrains.component';
import { SigninComponent } from './signin/signin.component'; 
import { SignupComponent } from './signup/signup.component'; 
import { UpdatecustomerdetailsComponent } from './updatecustomerdetails/updatecustomerdetails.component';
import { UpdatetraindetailsComponent } from './updatetraindetails/updatetraindetails.component';
import { ViewallcustomersComponent } from './viewallcustomers/viewallcustomers.component';
import { ViewalltrainsComponent } from './viewalltrains/viewalltrains.component';
import { ViewbookingsComponent } from './viewbookings/viewbookings.component';
import { ViewdetailsComponent } from './viewdetails/viewdetails.component';
import { ViewoneparticularcustomerComponent } from './viewoneparticularcustomer/viewoneparticularcustomer.component';
import { ViewoneparticulartrainComponent } from './viewoneparticulartrain/viewoneparticulartrain.component';
import { ViewparticularcustomerComponent } from './viewparticularcustomer/viewparticularcustomer.component';
import { ViewparticulartrainComponent } from './viewparticulartrain/viewparticulartrain.component';

const routes: Routes = [ 
  {path:'',component: HomeComponent}, 
  {path:'about',component: AboutComponent}, 
  {path:'signup',component: SignupComponent}, 
  {path:'signin',component: SigninComponent},
  {path: 'customerhome', component: CustomerhomeComponent},
  {path: 'adminhome', component: AdminhomeComponent },
  {path:'bookticket',component: BookticketComponent},
  {path: 'viewbookings', component: ViewbookingsComponent},
  {path: 'customerhelp', component: CustomerhelpComponent},
  {path: 'viewdetails', component: ViewdetailsComponent},
  {path:'addtrain',component: AddtrainComponent},
  {path: 'deletetrain', component: DeletetrainComponent},
  {path: 'updatetraindetails', component: UpdatetraindetailsComponent},
  {path: 'viewparticulartrain', component: ViewparticulartrainComponent},
  {path:'viewalltrains',component: ViewalltrainsComponent},
  {path: 'deletecustomer', component: DeletecustomerComponent},
  {path: 'viewparticularcustomer', component: ViewparticularcustomerComponent},
  {path: 'viewallcustomers', component: ViewallcustomersComponent},
  {path: 'searchtrains', component: SearchtrainsComponent},
  {path: 'payment', component: PaymentComponent},
  {path: 'updatecustomerdetails', component: UpdatecustomerdetailsComponent},
  {path: 'changeparticulartraindetails', component: ChangeparticulartraindetailsComponent},
  {path: 'viewoneparticulartrain', component: ViewoneparticulartrainComponent},
  {path: 'viewoneparticularcustomer', component: ViewoneparticularcustomerComponent},
  {path: 'home', component: HomeComponent},
  {path: 'admin', component: AdminComponent}
]; 
 
@NgModule({ 
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule] 
}) 
export class AppRoutingModule { }
