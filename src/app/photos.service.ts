import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  private Photos: Array<PhotoInfo> = null;
  private photosURL: string = 'https://picsum.photos/v2/list';

  constructor(private httpClient: HttpClient) {
    this.Photos = new Array<PhotoInfo>();

    this.httpClient.get(this.photosURL)
      .subscribe((data: Array<OnlinePhotoInfo>) => {
        for(let d of data) {
          this.Photos.push(new PhotoInfo(d.download_url, d.author));
        }
      });
    console.log(this.Photos.length);
    const photoInfo1 = new PhotoInfo('https://images.fineartamerica.com/images-medium-large-5/nice-landscape-summer-boon-mee.jpg',
      'Nice Landscape');
    const photoInfo2 = new PhotoInfo('https://contentgrid.homedepot-static.com/hdus/en_US/DTCCOMNEW/fetch/Category_Pages/Outdoor/Garden_Center/fruit-trees.jpg',
      'Fruit Tree and Plants');
    const photoInfo3 = new PhotoInfo('https://www.99acres.com/microsite/articles/files/2015/02/Highway_401_by_401-DVP.jpg',
      'Highway');

    this.Photos.push(photoInfo1);
    this.Photos.push(photoInfo2);
    this.Photos.push(photoInfo3);
  }

  getPhotos(): Array<PhotoInfo> {
    const result: Array<PhotoInfo> = [];
    this.Photos.map(x => result.push(new PhotoInfo(x.url, x.description)));
    return result;
  }

  addPhoto(args: PhotoInfo) {
    const param: PhotoInfo = new PhotoInfo(args.url, args.description);
    this.Photos.push(param);
    console.log(this.Photos.length);
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
class OnlinePhotoInfo {
  author: string;
  download_url: string;
}