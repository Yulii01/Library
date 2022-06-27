import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';

import { SeleccionComponent } from './seleccion/seleccion.component';

const routes: Routes = [
  { path: "index", component: IndexComponent},
  {path:'seleccion/:id', component: SeleccionComponent},
  { path: "**", redirectTo: "home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
