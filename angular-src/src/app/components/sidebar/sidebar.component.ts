import { Component, OnInit } from '@angular/core';
import { GetdoctorsService } from '../../services/getdoctors.service';
import { CreatesheduleService } from '../../services/createshedule.service';
// import {SELECT_DIRECTIVES} from 'ng2-select/select';

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

	doctorsArray: any;
	filteredArrayLength: any;
	date: any;
	patient: any = null;
	showPatientMenu: boolean = false;

	constructor(
		private getDoctorsService: GetdoctorsService,
		private createScheduleService: CreatesheduleService
	) { }

	ngOnInit() {
	    this.getDoctorsService.getDoctors().subscribe(docs => {
	    this.filteredArrayLength = undefined;
	    this.doctorsArray = docs.doctor;
		}, err => {
		    console.warn(err);
		    return false;
		});
	}

	passDoctors(index) {
	    this.createScheduleService.generateDoctor(index, 5);
		// this.createScheduleService.sendMessage('message');
	}

	onSelectItem(value) {
		this.patient = value;
	}

	togglePatientMenu() {
		this.showPatientMenu = !this.showPatientMenu;
	}

	finishWithThisPatient() {
		this.patient = null;
		this.showPatientMenu = false;
	}

}
