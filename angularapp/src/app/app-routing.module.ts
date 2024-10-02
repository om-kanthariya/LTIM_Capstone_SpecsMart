import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ViewSpecsComponent } from './components/view-specs/view-specs.component';
import { AddSpecsComponent } from './components/add-specs/add-specs.component';
import { ViewOrdersComponent } from './components/view-orders/view-orders.component';
import { ViewReviewComponent } from './components/view-review/view-review.component';

import { ErrorComponent } from './components/error/error.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthguardService } from './components/authguard/authguard.service';
import { CustomerdashboardComponent } from './components/customerdashboard/customerdashboard.component';
import { MyCartComponent } from './components/my-cart/my-cart.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { CustomerViewSpecsComponent } from './components/customer-view-specs/customer-view-specs.component';
import { EditSpecsComponent } from './components/edit-specs/edit-specs.component';
import { AddReviewComponent } from './components/add-review/add-review.component';
import { PlaceOrderComponent } from './components/place-order/place-order.component';
import { CustomerReviewComponent } from './components/customer-review/customer-review.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { CustomerHomeComponent } from './components/customer-home/customer-home.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'admin/home',component:AdminHomeComponent},
  {path:'customer/home',component:CustomerHomeComponent},
  {path:'admin/dashboard/view-specs',component:ViewSpecsComponent},
  {path:'customer/dashboard/home',component:CustomerFormComponent},
  {path:'customer/view-specs',component:CustomerViewSpecsComponent},
  {path:'admin/dashboard/add-specs',component:AddSpecsComponent},
  {path:'admin/dashboard/vieworder',component:ViewOrdersComponent},
  {path:'customer/my-cart',component:MyCartComponent},
  {path:'customer/my-orders',component:MyOrdersComponent},
  {path:'admin/dashboard/viewreview',component:ViewReviewComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'customer/add-review',component:AddReviewComponent},
  {path:'login',component:LoginComponent},
  {path:'admin/dashboard/edit-specs/:id',component:EditSpecsComponent},
  {path:'admin/dashboard/home',component:DashboardComponent},
  {path:'customer/dashboard',component:CustomerdashboardComponent},
  {path:'customer/view-review',component:CustomerReviewComponent},
  {path:'customer/place-order',component:PlaceOrderComponent},
  {path:'customer/reviews',component:AddReviewComponent},
  {path:'**', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }