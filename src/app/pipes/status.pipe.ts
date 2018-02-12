import { Pipe, PipeTransform } from '@angular/core';
import { Constants } from 'app/models/constants.model';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(value: number, args?: any): string {
    switch (value) {
      case 0:
        return Constants.Status.Pending;
      case 1:
        return Constants.Status.Started;
      case 2:
        return Constants.Status.Done;
      default:
        return '';
    }
  }

}
