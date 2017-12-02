import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  aboutClicked=true;
  projectsClicked=false;
  experienceClicked=false;
  skillsClicked=false;
  contactClicked=false;

  constructor() { }

  ngOnInit() {
  }

  onClick(event){
    // console.log(event);
    var currId = event.target.id;
    // console.log(currId)

    if(currId==='about'){
      this.aboutClicked = true;
      this.projectsClicked = false;
      this.experienceClicked=false;
      this.skillsClicked=false;
      this.contactClicked = false;
    } else if(currId==='projects'){
      this.aboutClicked = false;
      this.projectsClicked = true;
      this.experienceClicked=false;
      this.skillsClicked=false;
      this.contactClicked = false;
    } else if(currId==='experience'){
      this.aboutClicked = false;
      this.projectsClicked = false;
      this.experienceClicked=true;
      this.skillsClicked=false;
      this.contactClicked = false;
    } else if(currId==='skills'){
      this.aboutClicked = false;
      this.projectsClicked = false;
      this.experienceClicked=false;
      this.skillsClicked=true;
      this.contactClicked = false;
    } else if(currId==='contact'){
      this.aboutClicked = false;
      this.projectsClicked = false;
      this.experienceClicked=false;
      this.skillsClicked=false;
      this.contactClicked = true;
    }
  }

  brandClicked(){
    this.aboutClicked = true;
    this.projectsClicked = false;
    this.contactClicked = false;
  }
}
