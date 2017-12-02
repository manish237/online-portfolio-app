import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor() { }

  counter=0;
  progressAngular = 0; progressAngularMax=80;
  progressHTML = 0; progressHTMLMax = 78;
  progressCSS = 0; progressCSSMax = 70;
  progressJS = 0; progressJSMax = 80;
  progressC = 0; progressCMax = 70;
  progressJava = 0; progressJavaMax = 75;
  progressREST = 0; progressRESTMax = 78;

  ngOnInit() {
    var pInterval = setInterval(()=>{
      this.counter+1<=100?this.counter++:100;
      if(this.counter===100) {
        clearInterval(pInterval);
      }
      else {
        this.progressAngular+1<=this.progressAngularMax?this.progressAngular++:this.progressAngularMax;
        this.progressHTML+1<=this.progressHTMLMax?this.progressHTML++:this.progressHTMLMax;
        this.progressCSS+1<=this.progressCSSMax?this.progressCSS++:this.progressCSSMax;
        this.progressJS+1<=this.progressJSMax?this.progressJS++:this.progressJSMax;
        this.progressC+1<=this.progressCMax?this.progressC++:this.progressCMax;
        this.progressJava+1<=this.progressJavaMax?this.progressJava++:this.progressJavaMax;
        this.progressREST+1<=this.progressRESTMax?this.progressREST++:this.progressRESTMax;
      }
    },10);
  }

}
