
import { Component, OnInit } from '@angular/core';
import { MasterService } from '../../../core/service/master.service';

@Component({
  selector: 'app-airport',
  templateUrl: './airport.component.html',
  styleUrl: './airport.component.css'
})
export class AirportComponent implements OnInit{

  

  airportList: any [] = [];
  cityList: any[]=[];

  constructor(private master: MasterService){}
 

  ngOnInit(): void {
    this.loadAirports();
    this.loadCity();
  }
  addNew() {
    const obj = {
      "airportId": 0,
      "airportCode": "",
      "airportName": "",
      "cityId": 0
    };
    this.airportList.unshift(obj);
  }

  loadAirports() {
    this.master.getAllAirport().subscribe((res:any)=>{
      this.airportList = res.data;
    })
  }
  saveAll() {
    this.master.saveAirport(this.airportList).subscribe((res:any)=>{
      if(res.result) {
        alert('Data Updated Success')
      } else {
        alert(res.message);
      }
    })
  }

  loadCity () {
    this.master.getAllCity().subscribe((res:any)=>{
      this.cityList = res.data;
    })
  }

}
