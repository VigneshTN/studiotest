import { Pipe, PipeTransform } from '../../../../node_modules/@angular/core';
import { User } from '../../user/interface/user.interface';

@Pipe({name: 'searchFilter'})
export class SearchFilterPipe implements PipeTransform {
  transform(soruceArray: User[], term: string, type: string): any {
    if (Array.isArray(soruceArray) && soruceArray.length > 0 && term) {
      const filteredArray =  soruceArray.filter((item) => {
        return item[type].toLowerCase().startsWith(term.toLowerCase());
      });
      return filteredArray.length === 0 ? [-1] : filteredArray;
    } else {
      return [-1];
    }
  }
}

