import { Component, OnInit } from '@angular/core';
import { MasterService } from '../../../core/service/master.service';

@Component({
  selector: 'app-all-flights',
  templateUrl: './all-flights.component.html',
  styleUrl: './all-flights.component.css'
})
export class AllFlightsComponent implements OnInit {
  flightList: any [] = [];

  constructor(private master: MasterService){}

  ngOnInit(): void {
    this.loadFlights();
  }

  loadFlights() {
    this.master.getAllFlights().subscribe((res:any)=>{
      this.flightList = res.data;
    })
  }
}
