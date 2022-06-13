import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paragraph',
})
export class ParagraphPipe implements PipeTransform {
  transform(value: string): string {
    const trim = value.trim();
    return trim.charAt(0).toUpperCase() + trim.slice(1).toLowerCase();
  }
}
