import { Component } from '@angular/core';
import { PostsComponent } from './posts.component';
import read_json from "src/assets/json/books_source.json"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  read: any = read_json; 
  filterpost:any = PostsComponent

}




