import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export  class InMemoryDataService {

  constructor() { }

  createDb() {
    const loginCredentials = [
      { userName: 'rohit', apikey: 'dcae82c45d42815d6e3d6386efc893d2', password: 'login'},
      { userName: 'prajjwal', apikey: 'f711230437f5cc27c63153007ab6ae59', password: 'login'}
    ];
    return {loginCredentials};
  }
}
