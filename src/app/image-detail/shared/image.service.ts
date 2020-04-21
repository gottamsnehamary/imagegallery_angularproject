import { Injectable } from '@angular/core';

@Injectable()

export class ImageService{

    visibleImages=[];
    getImages()
    {
        return this.visibleImages =IMAGES.slice(0);
    }

    getImage( id : number)
    {
        return IMAGES.slice(0).find(images=> images.id==id )  
    }
  
}

const IMAGES =[
{ "id":1, "category":"boats", "caption":"","url":"assets/img/img_1.jpg" },
{ "id":2, "category":"boats", "caption":"","url":"assets/img/img_2.jpg" },
{ "id":3, "category":"boats", "caption":"","url":"assets/img/img_3.jpg" },
{ "id":4, "category":"boats", "caption":"","url":"assets/img/img_4.jpg" },
{ "id":5, "category":"boats", "caption":"","url":"assets/img/img_5.jpg" },
{ "id":6, "category":"boats", "caption":"","url":"assets/img/img_6.jpg" },
{ "id":7, "category":"roads", "caption":"","url":"assets/img/img_7.jpg" },
{ "id":8, "category":"roads", "caption":"","url":"assets/img/img_8.jpg" },
{ "id":9, "category":"roads", "caption":"","url":"assets/img/img_9.jpg" },
{ "id":10, "category":"roads", "caption":"","url":"assets/img/img_10.jpg" },
{ "id":11, "category":"roads", "caption":"","url":"assets/img/img_11.jpg" },
{ "id":12, "category":"roads", "caption":"","url":"assets/img/img_12.jpg" },
{ "id":13, "category":"roads", "caption":"","url":"assets/img/img_13.jpg" },
{ "id":14, "category":"roads", "caption":"","url":"assets/img/img_14.jpg" },
{ "id":15, "category":"roads", "caption":"","url":"assets/img/img_15.jpg" },
{ "id":16, "category":"roads", "caption":"","url":"assets/img/img_16.jpg" },
{ "id":17, "category":"nature", "caption":"","url":"assets/img/img_17.jpg" },
{ "id":18, "category":"nature", "caption":"","url":"assets/img/img_18.jpg" },
{ "id":19, "category":"nature", "caption":"","url":"assets/img/img_19.jpg" },
{ "id":20, "category":"nature", "caption":"","url":"assets/img/img_20.jpg" },
{ "id":21, "category":"nature", "caption":"","url":"assets/img/img_21.jpg" },
{ "id":22, "category":"nature", "caption":"","url":"assets/img/img_22.jpg" },
{ "id":23, "category":"nature", "caption":"","url":"assets/img/img_23.jpg" },
{ "id":24, "category":"nature", "caption":"","url":"assets/img/img_24.jpg" },
{ "id":25, "category":"nature", "caption":"","url":"assets/img/img_25.jpg" },
{ "id":26, "category":"beach", "caption":"","url":"assets/img/img_26.jpg" },
{ "id":27, "category":"beach", "caption":"","url":"assets/img/img_27.jpg" },
{ "id":28, "category":"beach", "caption":"","url":"assets/img/img_28.jpg" },
{ "id":29, "category":"beach", "caption":"","url":"assets/img/img_29.jpg" },
{ "id":30, "category":"beach", "caption":"","url":"assets/img/img_30.jpg" },
{ "id":31, "category":"beach", "caption":"","url":"assets/img/img_31.jpg" },
{ "id":32, "category":"beach", "caption":"","url":"assets/img/img_32.jpg" },
{ "id":33, "category":"beach", "caption":"","url":"assets/img/img_33.jpg" },



]
