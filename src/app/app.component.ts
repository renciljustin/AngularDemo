import { UsernameValidator } from './username.validator';
import { Component } from '@angular/core';
import { IToggleEventArgs } from './toggle/toggle.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fullName: string;

  employee = {
    name: 'Rencil Justin Evangelista',
    birthDate: new Date(1994, 9, 28),
    position: '.NET Developer',
    salary: 50000,
    summary: 'The quick brown fox jumps over the lazy dog'
  };

  toggle = true;

  onToggle(toggle: IToggleEventArgs) {
    this.toggle = !toggle.checked;
  }

  // tslint:disable-next-line:member-ordering
  quotes = [
    { text: 'Time is Gold.', author: 'John Doe'},
    { text: 'Knowledge is Power.', author: 'Jane Smith'}
  ];

  // tslint:disable-next-line:member-ordering
  age: number;

  // tslint:disable-next-line:member-ordering
  colors = [
    'Blue', 'Red', 'Green'
  ];
  // tslint:disable-next-line:member-ordering
  selectedColor: 'Blue';

  // tslint:disable-next-line:member-ordering
  students = [
    { name: 'John Doe', gender: 'Male', course: 'BS Information Technology' },
    { name: 'Rose Kelly', gender: 'Female', course: 'BS Information Technology' },
    { name: 'George Smith', gender: 'Male', course: 'BS Computer Engineering' },
  ];

  // tslint:disable-next-line:member-ordering
  toggleShape = true;

  // tslint:disable-next-line:member-ordering
  registrationForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.registrationForm = fb.group({
      // tslint:disable-next-line:max-line-length
      username: fb.control(null, [Validators.required, Validators.minLength(3), Validators.maxLength(20), UsernameValidator.noSpace], UsernameValidator.duplicate),
      password: fb.control(null, [Validators.required, Validators.minLength(8), Validators.maxLength(30)]),
      contact: fb.group({
        cellphoneNo: [],
        telephoneNo: []
      })
    });
  }

  get username() {
    return this.registrationForm.get('username');
  }

  get password() {
    return this.registrationForm.get('password');
  }

  get cellphoneNo() {
    return this.registrationForm.get('contact.cellphoneNo');
  }

  get telephoneNo() {
    return this.registrationForm.get('contact.telephoneNo');
  }
}
