import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "reversePipe",
})
export class ReversePipe implements PipeTransform {
  transform(value: any) {
    let arrayOfChars = (<string>value).split("");
    arrayOfChars = arrayOfChars.reverse();
    return arrayOfChars.join("");
  }
}
