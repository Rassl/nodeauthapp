import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['add-doctor.component.scss']
})
export class AddDoctorComponent implements OnInit {

  fio: String;
  specializaton: String;
  facility: String;
  start: String;
  finish: String;
  step: Number;

  constructor(
    private validateService: ValidateService,
    private  flashMessage: FlashMessagesService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onDoctorSubmit() {
    const doctor = {
      fio: this.fio,
      specializaton: this.specializaton,
      facility: this.facility,
      start: this.start,
      finish: this.finish,
      step: this.step,
      quotes: [

      ]
    }

    //Required Fields
    if(!this.validateService.validateRegister(doctor)) {
      this.flashMessage.show('Please fill fields', {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }

  }
}
