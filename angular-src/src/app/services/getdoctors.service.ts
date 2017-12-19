import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class GetdoctorsService {

  constructor(private http:Http) { }

  getDoctors() {
    let headers = new Headers();
    headers.append('Content-Type', 'applications/json');
    return this.http.post('http://localhost:3000/doctors/getdoctors', {headers: headers})
      .map(res => res.json());
  }
}
