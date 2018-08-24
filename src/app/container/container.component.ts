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
  shareIcon: boolean = false;
  LicenseKey;

  constructor(private formBuilder: FormBuilder, private lincenseService: LicenseService) { }

  ngOnInit() {
   
    this.form = this.formBuilder.group({
      CustomerId: [null, Validators.compose([Validators.required, Validators.maxLength(6)])],
      CustomerReview: [null, Validators.compose([Validators.required, Validators.maxLength(7)])],
      TotalBalance: [null, Validators.compose([Validators.required, Validators.maxLength(6)])],
      LastPayAmount: [null, Validators.compose([Validators.required, Validators.maxLength(6)])],
      LicensePeriod: [null, Validators.compose([Validators.required, Validators.maxLength(6)])],
      LastPayDate: [null, Validators.compose([Validators.required])],
      LicenseGenerationDate: [null, Validators.compose([Validators.required])],
      Block: [null],
      LicenseKey: [null],
    });

   

  }

 

  isFieldValid(field: string) {
    return !this.form.get(field).valid && this.form.get(field).touched;
  }



  onSubmit() {
    console.log(this.form);
    if (this.form.valid) {
      delete this.form.value.LicenseKey
      console.log('form submitted');
 
      this.LicenseKey  = "ZZIIMR-ZLFIMT-ZLQVFP-ZZZZPB-IIPSLG-6PAS6K-ZZIIM3" // remove this.

      this
        .lincenseService
        .postLicense(this.form.value)
        .subscribe((res:any) => {
          console.log(res)
          this.LicenseKey = res.license; //need to check the value and change as per response.
          this.reset();
        });
    } else {
      this.validateAllFormFields(this.form);
    }

  }

  onDecode() {
 
   
 
      this
        .lincenseService
        .getLicense(this.LicenseKey)
        .subscribe((res:any) => {
          console.log(res)
         alert(res)
        });
     

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

  toggleShareIcon(){
    this.shareIcon = !this.shareIcon;       
}

}
