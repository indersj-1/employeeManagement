import { Component, OnInit } from '@angular/core';


interface employeObj {
  firstName: string,
  lastName: string,
  employeeId: number,
  address: any
};

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  employeeSelected:any = null;
  employeeList: any = [{
    address:{
      houseNo:"83/3",
      street:"Sardar patel road",
      city:"chennai"
    },
    firstName:"Inder",
    lastName:"Singh",
    employeeId:948848    
  }];

  constructor() { }

  ngOnInit() {
  }
  viewEmployee(employee:employeObj){
    this.employeeSelected = employee;
    console.log( this.employeeSelected)
  }
  
}
