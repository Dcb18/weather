import { WeatherMap } from './../models/weather-map';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';



@Injectable()
export class WeatherService {

    constructor(protected http: HttpClient) {
    }

    public getApi(cityName: String): Observable<WeatherMap> {
        const options = {
          headers: new HttpHeaders()
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json'),
        };
        return this.http.get(environment.api + cityName + environment.key)
          .catch((error: HttpResponse<WeatherMap>) => {
            return Observable.throw(this.handlingError(error));
          }).finally(() => {
          });
      }
      private handlingError(error) {
        if (!error.error) {
          return 'Operação não pode ser realizada';
        } else {
          const errorString = JSON.stringify(error.error);
          let errorObject = JSON.parse(errorString);
          if (typeof errorObject === 'string') {
            errorObject = JSON.parse(errorObject);
          }
          return errorObject.mensagem;
        }
      }
}

