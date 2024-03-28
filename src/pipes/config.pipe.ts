import { Pipe, PipeTransform } from '@angular/core';
import { Config } from '../models/config';
import { CurrencyPipe } from '@angular/common';

@Pipe({
  name: 'config',
  standalone: true,
})
export class ConfigPipe implements PipeTransform {
  transform(config: Config): string {
    const formatStringStepThree: string = `Range: ${config.range} miles - Max speed: ${config.speed}`;
    return formatStringStepThree;
  }
}
