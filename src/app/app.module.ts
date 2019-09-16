import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhotosPresenterComponent } from './photos-presenter/photos-presenter.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AddPhotoComponent } from './add-photo/add-photo.component';

@NgModule({
  declarations: [
    AppComponent,
    PhotosPresenterComponent,
    WelcomeComponent,
    AddPhotoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
