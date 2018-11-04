import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListDataComponent } from './list-data/list-data.component';
import { UploadDataComponent } from './upload-data/upload-data.component';

const routes: Routes = [
  { path: 'home', component: ListDataComponent },
  { path: 'upload', component: UploadDataComponent },
  {path : '', component : ListDataComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})

export class AppRoutingModule { 
 
}
