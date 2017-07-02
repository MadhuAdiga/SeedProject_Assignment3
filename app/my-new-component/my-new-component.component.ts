import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-new-component',//selector tag
  templateUrl: './my-new-component.component.html',//Url to html
  styleUrls: ['./my-new-component.component.css']//stylesheet
})
export class MyNewComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
