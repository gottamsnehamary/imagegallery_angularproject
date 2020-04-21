import { Component, OnChanges } from '@angular/core';
import { ImageService } from '../image-detail/shared/image.service';
import { Input } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent implements OnChanges {

  title ='Recent Photos';
  images:any[]; 

@Input() filterBy? : string ='all'

  visibleImages: any[] = [];

  constructor(private imageService: ImageService) {
    this.visibleImages = this.imageService.getImages();
  }

  ngOnChanges() {
     this.visibleImages =this.imageService.getImages();
  }
}
