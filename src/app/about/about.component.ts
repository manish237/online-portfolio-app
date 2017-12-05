import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import * as Typed from 'typed.js';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  aboutMeText = 'With 10+ years in hand-on development, leading geo-dispersed teams, and managing the development of many internal customer-facing projects (customer service tools) at PayPal I bring a unique perspective in how to manage software development to get products in customers’ hands and ensure that those products create the desired experience. \n' +
    '\n' +
    'Starting as a software engineer at a consulting company in India, my role was to help them with PayPal’s Customer Support (CS) tools enhancements and its local IT infrastructure, enabling them to make development cost-effective and future-proof.\n' +
    '\n' +
    'As a new employee, in PayPal’s CS Tools team, I soon became a key contributor to understanding how customer-tools issues on a variety of products were hampering growth and were getting in the way of a positive customer experience. \n' +
    '\n' +
    'I led a major effort to fix and enable CS Tools Infrastructure in PayPal’s Merchant integration environment preventing revenue loss. Other significant contributions include leading major programs and critical performance optimizations using deep understanding CS Tools’ internals, utilizing knowledge of current and emerging technologies and strong collaboration skills. \n' +
    '\n' +
    'My strengths are knowing how to create the right customer support with efficient tools, technology, collaboration across various areas, and by leading teams with esprit de corps. Running various projects in a clutch is also something I have done repeatedly and delivered what was required, often exceeding expectations.';


  constructor() { }

  ngOnInit() {
    console.log($('.myTitle'));
    // $('.myTitle').textillate({ in: { effect: 'rollIn' } });
    // let type = new Typed('')


 /*   var typed = new Typed("#name", {
      strings: ["Manish Jaiswal"],
      typeSpeed:200,
      startDelay:2000,
      cursorChar: '.',

      // loop:true,
      // loopCount:1000
    });*/

  }

}
