import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BikeService} from './services/bike.service';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewRegistrationComponent } from './components/view-registration/view-registration.component';
import {AppErrorHandler} from './handlers/app-errorhandler.service';
import {ToastrModule} from 'ngx-toastr';
import { CallbackComponent } from './components/callback/callback.component';
import {AuthService} from './services/auth.service';
import { AuthGuard } from './services/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomeComponent,
    ViewRegistrationComponent,
    CallbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    // ToasterManager
    // ,
    // ToastrModule.forRoot({
    //   progressBar: true
    // })
  ],
  providers: [BikeService, AuthService, AuthGuard
    // , { provide: ErrorHandler, useClass: AppErrorHandler}
    ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
