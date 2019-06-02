import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { GlobalConstants } from '../constants/globalConstants';

@Injectable({
  providedIn: 'root'
})
export class ZomatoServiceService {

  constructor(private http: HttpClient) { }
  searchRestaurants() {
    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('X-Zomato-API-Key', 'f711230437f5cc27c63153007ab6ae59');

    return this.http
      .get(GlobalConstants.search_restaurant+'', { headers: headers })
      .subscribe(res => console.log(res));

  }
}
