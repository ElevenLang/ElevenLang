import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder, FormArray, AbstractControl } from '@angular/forms';
import { arrayRequiredValidator } from '../array-required.directive';

@Component({
  selector: 'app-multi-form',
  templateUrl: './multi-form.component.html',
  styleUrls: ['./multi-form.component.css']
})
export class MultiFormComponent implements OnInit {
  controlArray: Array<{ id: number; controlInstance: string }> = [];
  control = new FormControl({value: 'nice', disabled: true},  Validators.required,);
  multiForm: FormGroup;
  options: Array<object> = [
    {value: 1, label: 'male'},
    {value: 2, label: 'female'},
  ];

  constructor(
    private fb: FormBuilder
  ) {}


  addField(e?: MouseEvent): void {
    if (e) {
      e.preventDefault();
    }
    const id = this.controlArray.length > 0 ? this.controlArray[this.controlArray.length - 1].id + 1 : 0;
    const control = {id,controlInstance: `passenger${id}`};
    const index = this.controlArray.push(control);

    this.multiForm.addControl(
      this.controlArray[index -1].controlInstance,
      new FormControl(['1', ''], arrayRequiredValidator())
    )
  }

  removeField(i: { id: number; controlInstance: string }, e: MouseEvent): void {
    e.preventDefault();
    const index = this.controlArray.indexOf(i);
    this.controlArray.splice(index, 1);
    this.multiForm.removeControl(i.controlInstance);
  }

  getFormControl(name: string): AbstractControl {
    return this.multiForm.controls[name];
  }

  submitForm(): void {
    for (const i in this.multiForm.controls) {
      this.multiForm.controls[i].markAsDirty();
      this.multiForm.controls[i].updateValueAndValidity();
    }
    console.log(this.multiForm.value, this.multiForm.valid);
  }

  initForm(){
    this.multiForm = this.fb.group({
      'type': [''],
      'market': [''],
      'currency': [''],
      'email': ['test@123.com', Validators.required],
      'sexName': [['1', '24'], arrayRequiredValidator()],
    })
  }

  ngOnInit() {
    this.initForm();
  }

}
