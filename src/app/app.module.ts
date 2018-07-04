import { HttpClient, HttpHeaders, HttpParams, HttpResponse, HttpHandler, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WeatherComponent } from './components/weather/weather.component';
import { WeatherService } from './service/weather.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [WeatherService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
