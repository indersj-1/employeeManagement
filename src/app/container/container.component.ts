import { Component, OnInit } from '@angular/core';
import { LicenseService } from '../license.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';





@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  form: FormGroup;
  query;

  constructor(private formBuilder: FormBuilder, private lincenseService: LicenseService) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      customer: [null, Validators.compose([Validators.required, Validators.maxLength(6)])],
      amount: [null, Validators.compose([Validators.required, Validators.maxLength(7)])],
      date1: [null, Validators.compose([Validators.required, Validators.maxLength(6)])],
      date2: [null, Validators.compose([Validators.required, Validators.maxLength(6)])],
      date3: [null, Validators.compose([Validators.required, Validators.maxLength(6)])],
      rating: [null, Validators.compose([Validators.required, Validators.maxLength(2)])],
    });
  }

  isFieldValid(field: string) {
    return !this.form.get(field).valid && this.form.get(field).touched;
  }



  onSubmit() {

    console.log(this.form);
    if (this.form.valid) {
      console.log('form submitted');
      this
        .lincenseService
        .getLicense(this.form.value)
        .subscribe((res) => {
          console.log(res)
        });
    } else {
      this.validateAllFormFields(this.form);
    }

  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      console.log(field);
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  reset() {
    this.form.reset();
  }

}
