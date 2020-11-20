import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'espar'
})
export class EsParPipe implements PipeTransform {

  // tslint:disable-next-line: typedef
  transform(value: any) {
    let espar = 'no es un número par';
    if (value % 2 == 0) {
      espar = 'es un número par';
    }
    return 'El año es: ' + value + ' y ' + espar;
  }

}
