import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MailHelperService} from '../shared/mail-helper.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm:FormGroup;

  constructor(private mailService:MailHelperService/*, private snackBar:MatSnackBar*/) { }
  msgSentStatus;

  ngOnInit() {
    let email = '';
    let subject = '';
    let message = '';

    this.contactForm = new FormGroup({

      'email': new FormControl(email, [Validators.required,Validators.email]),
      'subject': new FormControl(subject, Validators.required),
      'content': new FormControl(message, Validators.required)
    });
  }

  onSubmit(){

    console.log(this.contactForm);

    let request = {
      fromEmail:this.contactForm.value.email,
      subject:this.contactForm.value.subject,
      content:this.contactForm.value.content
    };

/*    setTimeout(()=>{
      this.msgSentStatus = true;
      alert("Message Sent Successfully");

    },2000)*/
    this.mailService.sendEmail(request).subscribe(
      (data)=>{
        // console.log(data);
        alert("Message Sent Successfully");
      },
      (error)=>{
        // console.log(error);
        alert("Send Message Failure");
      }
    );

    this.contactForm.reset();

  }

  resetForm(){
    this.contactForm.reset();
  }
}
