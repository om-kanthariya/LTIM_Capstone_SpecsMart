import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthguardService } from './components/authguard/authguard.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddReviewComponent } from './components/add-review/add-review.component';
import { AddSpecsComponent } from './components/add-specs/add-specs.component';
import { CustomerViewSpecsComponent } from './components/customer-view-specs/customer-view-specs.component';
import { CustomerdashboardComponent } from './components/customerdashboard/customerdashboard.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditSpecsComponent } from './components/edit-specs/edit-specs.component';
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MyCartComponent } from './components/my-cart/my-cart.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PlaceOrderComponent } from './components/place-order/place-order.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ViewOrdersComponent } from './components/view-orders/view-orders.component';
import { ViewReviewComponent } from './components/view-review/view-review.component';
import { ViewSpecsComponent } from './components/view-specs/view-specs.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { AuthInterceptor } from './services/auth.interceptor';
import { CustomerReviewComponent } from './components/customer-review/customer-review.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { CustomerHomeComponent } from './components/customer-home/customer-home.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AddReviewComponent,
    AddSpecsComponent,
    CustomerViewSpecsComponent,
    CustomerdashboardComponent,
    DashboardComponent,
    EditSpecsComponent,
    ErrorComponent,
    HomeComponent,
    LoginComponent,
    MyCartComponent,
    MyOrdersComponent,
    NavbarComponent,
    PlaceOrderComponent,
    RegistrationComponent,
    ViewOrdersComponent,
    ViewReviewComponent,
    ViewSpecsComponent,
    CustomerReviewComponent,
    AdminHomeComponent,
    CustomerHomeComponent,
    CustomerFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }

function provideAnimations(): import("@angular/core").Provider {
  throw new Error('Function not implemented.');
}
