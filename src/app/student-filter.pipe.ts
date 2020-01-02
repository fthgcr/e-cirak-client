import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'studentFilter'
})
export class StudentFilterPipe implements PipeTransform {

  transform(values: any [], args?: any): any {
    return values.filter((item) => item.company_id == null);
  }

}
