import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the DayMonthYear pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  //name: 'day-month-year',
  name: 'formatDate',
})

export class FormatDate implements PipeTransform {

  // transform(value: string, ...args) {
  //   return value.toLowerCase();
  // }

  transform(value: string, ...args) {

    // console.log("args : ", args["showDay"]);

    if (value === null || value === undefined || value === "") return "";
    var date = new Date(value);
    return this.formatDate(date);
  }


  formatDate(today) {
    var monthNames = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    //var weekdayNames = [
    //"Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"
    //];

    //return weekdayNames[today.getDay()] + ', ' + today.getDate() + ' '
    //+ monthNames[today.getMonth()] + ' ' + today.getFullYear();

    return today.getDate() + ' ' + monthNames[today.getMonth()]
      + ' ' + today.getFullYear();

  }

}
