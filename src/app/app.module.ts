import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { WelcomeComponent } from './home/welcome.component';
import { RouterModule } from '@angular/router';
import { ProductModule } from './products/product.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: "toast-top-right", // Position of the toast
      closeButton: true             // Show close button
    }),
    RouterModule.forRoot([
      {
        path:'welcome', component:WelcomeComponent
      },{
        path:'',  redirectTo:'welcome', pathMatch:'full'
      },{
        path:'**',  redirectTo:'welcome', pathMatch:'full'

      },
      
    ]),
    ProductModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
