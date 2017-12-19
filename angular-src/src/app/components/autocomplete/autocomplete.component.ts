import {Component, OnInit, EventEmitter, Output, ElementRef} from '@angular/core';
import {GetpatientsService} from '../../services/getpatients.service'

@Component({
    selector: 'app-autocomplete',
	host: {
		'(document:click)': 'handleClick($event)',
	},
    templateUrl: './autocomplete.component.html',
    styleUrls: ['./autocomplete.component.scss'],
})
export class AutocompleteComponent implements OnInit {
	@Output() onSelectItem = new EventEmitter<any>();

	public query = '';
	public items = [
		{   name: "Azerbaijan",
			insurance: "123"
		},
		{
			name: "Belarus",
			insurance: "78"
		}
		]
	public filteredList = [];
	public elementRef;
	public patients;

	constructor(
		myElement: ElementRef,
	    private getPatientsService: GetpatientsService
	) {
		this.elementRef = myElement;
	}

	ngOnInit() {
		this.getPatientsService.getPatients().subscribe(patient => {
			// this.filteredArrayLength = undefined;
			this.items = patient.patients;
		}, err => {
			console.warn(err);
			return false;
		});


	}


	filterList() {
		if(this.query === '') {
			this.filteredList = [];
		} else  {
			this.filteredList = this.items.filter(function(el) {
				return el.name.toLowerCase().indexOf(this.query.toLocaleLowerCase()) > -1 || el.insurance.toLowerCase().indexOf(this.query.toLocaleLowerCase()) > -1;
			}.bind(this));
		}

	}

	selectItem(item) {
		this.query = item.name;
		this.filteredList = [];
		this.onSelectItem.emit(item);
	}

	showDropdown() {
		this.filteredList = this.items;
	}

	handleClick(event){
		var clickedComponent = event.target;
		var inside = false;
		do {
			if (clickedComponent === this.elementRef.nativeElement) {
				inside = true;
			}
			clickedComponent = clickedComponent.parentNode;
		} while (clickedComponent);
		if(!inside){
			this.filteredList = [];
		}
	}
}
