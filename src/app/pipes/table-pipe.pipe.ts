import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tablePipe',
  standalone: true
})
export class TablePipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
