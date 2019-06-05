import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: string, limit?: any): any {
    if (limit) {
      return value.length > limit ? value.substring(0, limit) + '...' : value;
    }
    return value.length > limit ? value.substring(0, 50) + '...' : value;
  }

}
