import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-addEmployee',
  template: `
  <!-- Modal -->
  <div id="employeeModal" class="modal fade"  role="dialog">
    <div class="modal-dialog">
  
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Modal Header</h4>
        </div>
        <div class="modal-body">
          <p> {{employeeInfo | json}}
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
  
    </div>
  </div>
  `

})
export class addEmployeeComponent implements OnInit {
  @Input() employeeInfo: string;
  constructor() {
    console.log(this.employeeInfo)

   }

  ngOnInit() {
    $("#myModal").modal()
  }

}
