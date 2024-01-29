import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { WeatherData } from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }

  getWeatherData(cityName:string):Observable<WeatherData>{
    return this.http.get<WeatherData>(environment.weatherApiBaseUrl+`/${cityName}`,{
      headers:new HttpHeaders()
      .set(environment.XRapidAPIHostLabel,environment.XRapidAPIHostValue)
      .set(environment.XRapidAPIKeyLabel,environment.XRapidAPIKeyvalue),
      params:new HttpParams()
      .set('units','metric')
    })
  }
}
