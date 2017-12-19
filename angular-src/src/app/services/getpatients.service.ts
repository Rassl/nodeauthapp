import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GetpatientsService {

  constructor(private http:Http) { }

	getPatients() {
		let headers = new Headers();
		headers.append('Content-Type', 'applications/json');
		return this.http.get('http://localhost:3000/patients/getpatients', {headers: headers})
			.map(res => res.json());
	}
}
