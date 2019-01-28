import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sinfoto'
})
export class SinfotoPipe implements PipeTransform {

  transform(value: any): any {

   let noImagen:string = 'assets/img/noimage.png';

    if ( !value || value == 'undefined'){
      return noImagen;
    }
    else{
      return value;
    }
  }

}
