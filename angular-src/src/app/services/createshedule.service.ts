import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CreatesheduleService {
	private subject = new Subject<any>();

	doctors: any;
	generatedDoctors: any;
	date: number;
	patient: string;
	gridItems: any[];
	doctorsSchedule: any[];
	days: number;

	constructor() {
		this.doctors = [],
		this.generatedDoctors = [],
		this.date = 23,
		this.patient,
		this.gridItems = [],
		this.doctorsSchedule,
		this.days = 1;
		this.createSchedule = this.createSchedule.bind(this);
	}


	updateItems(): Observable<any> {
		return this.subject.asObservable();
	}

	generateDoctor(doctor, days) {
		let index = this.doctors.indexOf(doctor);

		if(index !== -1) {
			this.doctors.splice(index, 1);
		} else {
			this.doctors.push(doctor);
		}

		this._generateDoctorsSchedule();
		this.subject.next('one');
	}

	_generateDoctorsSchedule() {
		this.generatedDoctors = [];

		this.generatedDoctors = this.doctors.map(doctor => {
			let quotesGenerated = [];

			for(let i = Number(doctor.start); i <= Number(doctor.finish); i += Number(doctor.step)) {
				quotesGenerated.push(i);
			}

			let _quotes = doctor.quotes;
			let _result  = quotesGenerated.map((item, index) => {
				let myValue = _quotes.find(quoteItem => {
					return quoteItem.quotetime == item;
				});

				return myValue ? {quoteTime: item, quoteType: myValue.quotetype} : {quoteTime: item, quoteType: 'запись доступна'};
			})

			return Object.assign({}, doctor, {quotes: _result});
		})

	}


	createSchedule() {

		this.gridItems = [];

		for(let i = this.date; i < this.date + this.days; i++ ) {
			let j = this.date + this.days - i;
			this.generatedDoctors.forEach(item => {
				this.gridItems.push(
					{date: i,
						doctor: item}
				);
			})
		}
		return this.gridItems;
	}

	getDays(days) {
		this.days = days === 4 ? this.days : days;
	}



	getDate(date) {

	}



}

