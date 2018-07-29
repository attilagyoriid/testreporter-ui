import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class BikeService {

  constructor(private http: HttpClient) {

  }

  private bikesUrl = 'server/api/v1/bikes';
  private bikesUrlPrefix = 'server/api/v1/bikes/';

  getBikes() {
    return this.http.get(this.bikesUrl);
  }

  getBikeById(id: number) {
    return this.http.get(this.bikesUrlPrefix + id);
  }

  createBikeRegistration(bike) {
    const body = JSON.stringify(bike);
    return this.http.post(this.bikesUrl, body, httpOptions);
  }
}
