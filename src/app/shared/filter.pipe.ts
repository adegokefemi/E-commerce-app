import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value : any[], filterSrting: string, propName:string): any[] {
    const result: any = [];
    if (!value || filterSrting === '' || propName === ''){
      return value;
    }

    value.forEach((a:any)=>{
      if(a[propName].trim().toLowerCase().includes(filterSrting.toLocaleLowerCase())){
        result.push(a);
      }
    })
    return result;
  }

}
