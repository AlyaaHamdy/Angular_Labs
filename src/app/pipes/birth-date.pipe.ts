import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'birthDate'
})
export class BirthDatePipe implements PipeTransform {
  birthDate: any;

  transform(value: number): number {
    return this.birthDate.find((item: { key: number; })=>item.key==value)?.value!;
  }
  myID="29609042800728"
  BirthDate:{key:string,value:string}[]=[  
    {key:this.myID,value:"4/9/1996"}]
  

}
