import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fahrenheitToCelsius',
})
export class FahrenheitToCelsiusPipe implements PipeTransform {
  transform(value: number): number {
    return ((value - 32) * 5) / 9;
  }
}
