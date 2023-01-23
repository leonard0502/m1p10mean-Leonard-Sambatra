import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  bookTitle ! : FormGroup;
  huhu: any = {
    intitule: ''
  }

  constructor(private formBuilder : FormBuilder) {

  }

  ngOnInit() {
    this.bookTitle = this.formBuilder.group({
      text : [null]
    });
  }

  OnClick(){
    console.log('uhhu: ', this.bookTitle.value);
  }

}
