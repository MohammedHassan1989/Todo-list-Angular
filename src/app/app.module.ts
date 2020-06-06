import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { HomeComponent } from './home/home.component';
import {HTTP_INTERCEPTORS,HttpClientModule} from  '@angular/common/http'
import { AuthInterceptor } from './shared/http/auth-header.interceptor';

@NgModule({
  imports: [
    BrowserModule,
  BrowserAnimationsModule,
    AppRoutingModule,
   // AuthModule,
   // HomeModule,
    FormsModule,
    ReactiveFormsModule,
  
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    SideMenuComponent,
    HomeComponent,

  ],

  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor,multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
