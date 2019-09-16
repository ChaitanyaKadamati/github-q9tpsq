import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AddPhotoComponent } from './add-photo/add-photo.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'add-photo', component: AddPhotoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
