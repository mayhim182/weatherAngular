import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { response } from 'express';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private weatherService:WeatherService){}

  ngOnInit(): void {
    this.weatherService.getWeatherData('london')
    .subscribe({
      next:(response)=>{
        console.log(response);
      }
    })
  }
  title = 'weatherApp';
}
