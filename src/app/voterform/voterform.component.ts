import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-voterform',
  templateUrl: './voterform.component.html',
  styleUrls: ['./voterform.component.css']
})
export class VoterformComponent implements OnInit {
// id: FormControl;
// name: FormControl;
// age: FormControl;
// city: FormControl;
// state: FormControl;
// data: object [] = [];
 constructor( private fb: FormBuilder) { }
  form: FormGroup;
  ngOnInit() {

this.form = this.fb.group({
  addresses: this.fb.array([
    this.fb.group({
      name: [''],
      age: [''],
      city: [''],
      state: ['']
    })
  ])
});
console.log(this.form);
  }
  addAddresses() {
    const address = <FormArray> this.form.get('addresses');
address.push(this.fb.group({
  name: [''],
  age: [''],
  city: [''],
  state: ['']

}));
  }
  removeAddress() {
    const address = <FormArray> this.form.get('addresses');
address.removeAt(1);

  }
  processForm() {
    console.log('processing..', this.form.value);

  }
 }
