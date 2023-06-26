import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getSrc'
})
export class GetSrcPipe implements PipeTransform {
  transform(value: string, path?: string): string {
    return `./assets/images/${path || 'icons'}/${value}`;
  }
}
