import { Component, OnInit } from '@angular/core';
import { PhotosService, PhotoInfo } from '../photos.service';

@Component({
  selector: 'app-photos-presenter',
  templateUrl: './photos-presenter.component.html',
  styleUrls: ['./photos-presenter.component.css']
})
export class PhotosPresenterComponent implements OnInit {
  photos: Array<PhotoInfo> = [];

  constructor(private photosService: PhotosService) { }

  ngOnInit() {
    this.photos = this.photosService.getPhotos();
  }

  update() {
    this.photos = this.photosService.getPhotos();
  }
}
