import { Component, OnInit } from '@angular/core';
import read_json from "src/assets/json/books_source.json"

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  
    title = 'my-app';
    read: any = read_json; 
    filterpost:any = ""
  
  
  
  constructor() { }

  ngOnInit(): void {
  }

}
