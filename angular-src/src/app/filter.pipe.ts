import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {

  transform(doctors: any, term: any): any {
    // return null;

    let doctorsFilterd = doctors;
    if(term === undefined) return doctors;

    return(
      doctors.filter(doctor => {
      return doctor.name.toLowerCase().includes(term.toLowerCase());
    })

    )
  }

}
