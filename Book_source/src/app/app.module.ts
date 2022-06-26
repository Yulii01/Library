import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { filter } from 'rxjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {PostsComponent} from "./posts.component";
//import {FilterPipe} from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
import { SourcePipe } from './source.pipe';


@NgModule({
  declarations: [
    AppComponent,
    SourcePipe,PostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
