import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {
  private baseURL = 'http://api.openweathermap.org/data/2.5/weather?id=';
  private weatherIconURL = 'http://openweathermap.org/img/w/';
  private apiKey = '&units=metric&lang=ru&appid=' + '5460396124d03105c9daf93bcc5f456a';

  constructor(
    private http: HttpClient
  ) { }

  public getWeather(cityID: string) {
    return new Promise((resolve, reject) => {
      this.http.get(this.baseURL + cityID + this.apiKey).subscribe(
        (data:any) => {
          data.weatherIcon = this.weatherIconURL + data.weather[0].icon + '.png';

          resolve(data);
        },
        error => reject(error)
        );
    });
  }
}