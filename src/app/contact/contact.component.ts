import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sc-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  name: string;
  email: string;
  message: string;

  constructor() {}

  ngOnInit() {}

  submitForm() {
    console.log(`${this.name} submit form`)
  }

}
