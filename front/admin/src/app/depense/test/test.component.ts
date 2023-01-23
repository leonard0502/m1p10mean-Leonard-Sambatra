import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  bookTitle: string;
  huhu: any = {
    intitule: ''
  }

  constructor() { }

  ngOnInit() {
  }

  OnClick(){
    console.log('uhhu: ', this.bookTitle);
  }

}
