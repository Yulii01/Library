import { Component, OnInit } from '@angular/core';
import read_json from "src/assets/json/books_source.json"
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-seleccion',
  templateUrl: './seleccion.component.html',
  styleUrls: ['./seleccion.component.css']
})
export class SeleccionComponent implements OnInit {
  read: any = read_json; 

  id=0;
  title=""
  author=""
  short_description=""
  editorial=""
  constructor(private route : ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(
      params=>{
         this.id = +this.route.toString()[21];
        
      })


      for(const element of this.read){
    
       if(element.bookId == this.id)
       {
          this.title = element.title;
          this.author = element.authors;
          this.short_description=element.short_description
          this.editorial = element.editorial
       }
       
     } 
   
  }

}
