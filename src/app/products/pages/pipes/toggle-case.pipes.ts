import { Pipe, PipeTransform } from '@angular/core';

//fernando | toggleCase = 'FERNANDO'
@Pipe({
    name: 'toggleCase'
})

export class ToggleCasePipe implements PipeTransform {
    transform(value: string) : string  {
        return value.toUpperCase();
    }
}