import { Component, OnInit } from '@angular/core';
import { CreatesheduleService } from '../../services/createshedule.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['grid.component.scss']
})
export class GridComponent implements OnInit {

	gridItems: any[];
	subscription: Subscription;

	constructor(
		private createScheduleService: CreatesheduleService
	) {
		this.subscription = this.createScheduleService.updateItems().subscribe(() => {
			this.showSchedule(4)
		});
	}

	ngOnInit() {
		this.gridItems = [];
	}

	showSchedule(days) {
		this.createScheduleService.getDays(days)
		this.gridItems  =  this.createScheduleService.createSchedule();
	}

	makeAppointment(time, type) {
		if (type !== "запись доступна" ) {
			alert("Denied");
		}
	}


}
