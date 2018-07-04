import { WeatherMap } from './../../models/weather-map';
import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../service/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  public weatherMap: WeatherMap;
  public city: string;
  constructor(private weatherService: WeatherService) { }
  public message: string;

  ngOnInit() {
  }
  getWeather() {
    if (this.city !== undefined && this.city !== '') {
      this.weatherService.getApi(this.city).subscribe((a) => {
        this.weatherMap = a;
        this.weatherMap.main.temp = parseFloat(Math.round(this.weatherMap.main.temp - 273).toFixed(4));
        this.weatherMap.main.temp_max = parseFloat(Math.round(this.weatherMap.main.temp_max - 273).toFixed(4));
        this.weatherMap.main.temp_min = parseFloat(Math.round(this.weatherMap.main.temp_min - 273) .toFixed(4));
        console.log(this.weatherMap);
      }, () => {
        this.message = 'An error has occurred, please try again';
      });
    } else {
      this.message = 'Pease, write the name of your city';
      this.showErro();
    }
  }


  showErro() {
    const snackbar = document.getElementById('snackbar');
    snackbar.className = 'show';
    setTimeout(() => { snackbar.className = snackbar.className.replace('show', ''); }, 3000);
  }
}
