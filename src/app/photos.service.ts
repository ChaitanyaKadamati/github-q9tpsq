import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotosService implements OnInit {
  Photos: Array<PhotoInfo> = [];

  constructor() { }

  ngOnInit() {
    const photoInfo1 = new PhotoInfo('https://images.fineartamerica.com/images-medium-large-5/nice-landscape-summer-boon-mee.jpg',
      'Nice Landscape');
    const photoInfo2 = new PhotoInfo('https://contentgrid.homedepot-static.com/hdus/en_US/DTCCOMNEW/fetch/Category_Pages/Outdoor/Garden_Center/fruit-trees.jpg',
      'Fruit Tree and Plants');
    const photoInfo3 = new PhotoInfo('https://www.99acres.com/microsite/articles/files/2015/02/Highway_401_by_401-DVP.jpg',
      'Highway');

    this.Photos.push(photoInfo1);
    this.Photos.push(photoInfo2);
    this.Photos.push(photoInfo3);
    console.log('Infoi:' + photoInfo1);
  }

  getPhotos(): Array<PhotoInfo> {
    const result: Array<PhotoInfo> = [];
    this.Photos.map(x => result.push(new PhotoInfo(x.url, x.description)));
    console.log(this.Photos[0]);
    return result;
  }

  addPhoto(args: PhotoInfo) {
    const param: PhotoInfo = new PhotoInfo(args.url, args.description);
    this.Photos.push(param);
  }
}

export class PhotoInfo {
  url: string;
  description: string;
  constructor(pUrl, pDescription) {
    this.url = pUrl;
    this.description = pDescription;
  }
}
