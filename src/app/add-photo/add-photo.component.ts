import { Component, OnInit } from '@angular/core';
import { PhotosService, PhotoInfo } from '../photos.service';

@Component({
  selector: 'app-add-photo',
  templateUrl: './add-photo.component.html',
  styleUrls: ['./add-photo.component.css']
})
export class AddPhotoComponent implements OnInit {
  url:string = null;
  description:string = null;

  constructor(private photosService: PhotosService) { }

  ngOnInit() {
  }

  onSharePhoto() {
    const args: PhotoInfo = new PhotoInfo(this.url, this.description);
    this.photosService.addPhoto(args);
  }
}
