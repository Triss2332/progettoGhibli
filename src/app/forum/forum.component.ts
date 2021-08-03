import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {
  inputname:any = "";
  inputtext:any = "";
  showcomment:boolean = false;

  constructor() { }

  ngOnInit(): void {
    
  }

  mostracommento(){
    this.showcomment = true;
  }
  cancellacommento(){
    this.showcomment = false;
    this.inputname = ""
    this.inputtext = ""
  }

}
