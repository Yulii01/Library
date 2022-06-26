import { Component,OnInit } from "@angular/core";
import read_json from "src/assets/json/books_source.json"

@Component({
  selector: 'app-root',
  templateUrl: 'posts.component.html',
  styleUrls: ['./app.component.css']
})

export class PostsComponent implements OnInit {
  filterpost = '';
  title = 'my-app';
  read: any = read_json; 
    constructor() {
        
    }
    ngOnInit(): void {}
}