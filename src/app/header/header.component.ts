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
    console.log(localStorage.getItem('currTab'));
    const currId =     localStorage.getItem('currTab');
    if(currId==='about'){
      this.aboutClicked = true;
      localStorage.setItem('currTab','about');
      this.projectsClicked = false;
      this.experienceClicked=false;
      this.skillsClicked=false;
      this.contactClicked = false;
    } else if(currId==='projects'){
      this.aboutClicked = false;
      this.projectsClicked = true;
      localStorage.setItem('currTab','projects');
      this.experienceClicked=false;
      this.skillsClicked=false;
      this.contactClicked = false;
    } else if(currId==='experience'){
      this.aboutClicked = false;
      this.projectsClicked = false;
      this.experienceClicked=true;
      localStorage.setItem('currTab','experience');
      this.skillsClicked=false;
      this.contactClicked = false;
    } else if(currId==='skills'){
      this.aboutClicked = false;
      this.projectsClicked = false;
      this.experienceClicked=false;
      this.skillsClicked=true;
      localStorage.setItem('currTab','skills');
      this.contactClicked = false;
    } else if(currId==='contact'){
      this.aboutClicked = false;
      this.projectsClicked = false;
      this.experienceClicked=false;
      this.skillsClicked=false;
      this.contactClicked = true;
      localStorage.setItem('currTab','contact');
    }
  }

  onClick(event){
    // console.log(event);
    const currId = event.target.id;
    // console.log(currId)

    if(currId==='about'){
      this.aboutClicked = true;
      localStorage.setItem('currTab','about');
      this.projectsClicked = false;
      this.experienceClicked=false;
      this.skillsClicked=false;
      this.contactClicked = false;
    } else if(currId==='projects'){
      this.aboutClicked = false;
      this.projectsClicked = true;
      localStorage.setItem('currTab','projects');
      this.experienceClicked=false;
      this.skillsClicked=false;
      this.contactClicked = false;
    } else if(currId==='experience'){
      this.aboutClicked = false;
      this.projectsClicked = false;
      this.experienceClicked=true;
      localStorage.setItem('currTab','experience');
      this.skillsClicked=false;
      this.contactClicked = false;
    } else if(currId==='skills'){
      this.aboutClicked = false;
      this.projectsClicked = false;
      this.experienceClicked=false;
      this.skillsClicked=true;
      localStorage.setItem('currTab','skills');
      this.contactClicked = false;
    } else if(currId==='contact'){
      this.aboutClicked = false;
      this.projectsClicked = false;
      this.experienceClicked=false;
      this.skillsClicked=false;
      this.contactClicked = true;
      localStorage.setItem('currTab','contact');
    }
  }

  brandClicked(){
    this.aboutClicked = true;
    this.projectsClicked = false;
    this.contactClicked = false;
  }
}
