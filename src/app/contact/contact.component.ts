import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MailHelperService} from '../shared/mail-helper.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm:FormGroup;

  constructor(private mailService:MailHelperService) { }

  ngOnInit() {
    let email = '';
    let subject = '';
    let message = '';

    this.contactForm = new FormGroup({

      'email': new FormControl(email, [Validators.required,Validators.email]),
      'subject': new FormControl(subject, Validators.required),
      'message': new FormControl(message, Validators.required)
    });
  }

  onSubmit(){

    console.log(this.contactForm);

    let request = {
      fromEmail:this.contactForm.value.email,
      subject:this.contactForm.value.subject,
      content:this.contactForm.value.content
    };

    this.mailService.sendEmail(request);

  }

}
