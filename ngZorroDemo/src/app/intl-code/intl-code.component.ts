import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { MarketService } from './../service/markets.service';



@Component({
  selector: 'app-intl-code',
  templateUrl: './intl-code.component.html',
  styleUrls: ['./intl-code.component.css']
})
export class IntlCodeComponent implements OnInit {
  validateForm: FormGroup;
  countryList:any;
  constructor(private fb: FormBuilder, private marketService: MarketService) { }

  ngOnInit() {
    this.marketService.country().then(res => {
      const language = localStorage.getItem('lang');
      console.log(res);
      this.countryList = res[language];
      console.log(this.countryList);
    });

    this.validateForm = this.fb.group({
      // email            : [ null, [ Validators.email, Validators.required ] ],
      // password         : [ null, [ Validators.required ] ],
      // checkPassword    : [ null, [ Validators.required, this.confirmationValidator ] ],
      // nickname         : [ null, [ Validators.required ] ],
      phoneNumberPrefix: [ 'cn+86' ],
      phoneNumber      : [ null, [ Validators.required ] ],
      // website          : [ null, [ Validators.required ] ],
      // captcha          : [ null, [ Validators.required ] ],
      // agree            : [ false ]
    });
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[ i ].markAsDirty();
      this.validateForm.controls[ i ].updateValueAndValidity();
    }
    console.log(this.validateForm.value);
  }

}
