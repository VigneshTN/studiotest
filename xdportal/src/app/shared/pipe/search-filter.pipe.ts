import { Pipe, PipeTransform } from '../../../../node_modules/@angular/core';
import { User } from '../../user/interface/user.interface';

@Pipe({
  name: 'imageTypeFilter'
})
export class ImageTypeFilterPipe implements PipeTransform {
  transform(srcArray: Array<User>, searchType: string, searchTerm: string): User[] {
    return srcArray.filter(x => x[searchType].contains(searchTerm));
  }

}
