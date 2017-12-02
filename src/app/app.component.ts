import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  contactForm:FormGroup;

  constructor(private http:HttpClient){
    this.http.get('/api/').subscribe((data)=>{
      console.log(data);
    });
  }
  ngOnInit(){
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

    this.http.post('/api/',request).subscribe((data)=>{
      console.log(data);
    });
  }

}
