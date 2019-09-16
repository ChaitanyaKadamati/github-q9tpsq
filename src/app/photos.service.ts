import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor() { }

  getPhotos(): Array<PhotoInfo> {
    const photoInfo1 = new PhotoInfo('https://images.fineartamerica.com/images-medium-large-5/nice-landscape-summer-boon-mee.jpg',
      'Nice Landscape');
    const photoInfo2 =  new PhotoInfo('https://contentgrid.homedepot-static.com/hdus/en_US/DTCCOMNEW/fetch/Category_Pages/Outdoor/Garden_Center/fruit-trees.jpg',
    'Fruit Tree and Plants');
    const photoInfo3 = new PhotoInfo('https://www.99acres.com/microsite/articles/files/2015/02/Highway_401_by_401-DVP.jpg',
    'Highway');
    return [photoInfo1, photoInfo2, photoInfo3,photoInfo1, photoInfo2, photoInfo3,photoInfo1, photoInfo2, photoInfo3,photoInfo1, photoInfo2, photoInfo3,photoInfo1, photoInfo2, photoInfo3,photoInfo1, photoInfo2, photoInfo3,photoInfo1, photoInfo2, photoInfo3,photoInfo1, photoInfo2, photoInfo3,photoInfo1, photoInfo2, photoInfo3,photoInfo1, photoInfo2, photoInfo3,photoInfo1, photoInfo2, photoInfo3,photoInfo1, photoInfo2, photoInfo3,photoInfo1, photoInfo2, photoInfo3,photoInfo1, photoInfo2, photoInfo3,photoInfo1, photoInfo2, photoInfo3,photoInfo1, photoInfo2, photoInfo3];
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
