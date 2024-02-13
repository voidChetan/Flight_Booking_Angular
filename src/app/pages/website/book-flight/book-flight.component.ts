import { Component } from '@angular/core';

@Component({
  selector: 'app-book-flight',
  templateUrl: './book-flight.component.html',
  styleUrl: './book-flight.component.css'
})
export class BookFlightComponent {

  passendgerlist: any []= [];

  addNew() {
    const obj = {
      "travelerName": "",
      "contactNo": "",
      "aadharNo": "",
      "seatNo": 0
    };
    this.passendgerlist.unshift(obj)
  }
}
