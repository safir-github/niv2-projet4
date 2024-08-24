import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {
  transform(array: any[], searchTerm: string): any[] {
    if (!array || !searchTerm) return array;

    return array.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
