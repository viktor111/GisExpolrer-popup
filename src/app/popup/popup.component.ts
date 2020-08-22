import { element } from 'protractor';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit, ViewChild, TemplateRef, AfterContentInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Template } from '@angular/compiler/src/render3/r3_ast';
import { HttpClient } from '@angular/common/http';
import {NgxGalleryOptions} from '@kolkov/ngx-gallery';
import {NgxGalleryImage} from '@kolkov/ngx-gallery';
import {NgxGalleryAnimation} from '@kolkov/ngx-gallery';
// import { createPopper } from '@popperjs/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  @ViewChild('docViewer' , {static: true}) docViewer: TemplateRef<any>;
  @ViewChild('jsonViewer' , {static: true}) jsonViewer: TemplateRef<any>;
  @ViewChild('p') pop;

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

 // @Input() element;

  viewerToShow: TemplateRef<any>;
  jsonContent: {};

  // tslint:disable-next-line: no-trailing-whitespace
  

  // viewerToShow = this.docViewer;

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.viewerToShow = this.docViewer;

    this.galleryOptions = [
      {
          width: '600px',
          height: '400px',
          thumbnailsColumns: 4,
          imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
          breakpoint: 800,
          width: '100%',
          height: '600px',
          imagePercent: 80,
          thumbnailsPercent: 20,
          thumbnailsMargin: 20,
          thumbnailMargin: 20
      },
      // max-width 400
      {
          breakpoint: 400,
          preview: false
      }
  ];
    this.galleryImages = [
    {
        small: 'https://lh3.googleusercontent.com/9kABykeGovHPy-dN19lRxxnCp8IZK3Pkl8qLFNxrEe-hhKVZeiyhTBEIRUt6t-vhxQ',
        medium: 'https://lh3.googleusercontent.com/9kABykeGovHPy-dN19lRxxnCp8IZK3Pkl8qLFNxrEe-hhKVZeiyhTBEIRUt6t-vhxQ',
        big: 'https://lh3.googleusercontent.com/9kABykeGovHPy-dN19lRxxnCp8IZK3Pkl8qLFNxrEe-hhKVZeiyhTBEIRUt6t-vhxQ'
    },
    {
        small: 'https://www.theuiaa.org/wp-content/uploads/2017/11/RTM19-banner-web.jpg',
        medium: 'https://www.theuiaa.org/wp-content/uploads/2017/11/RTM19-banner-web.jpg',
        big: 'https://www.theuiaa.org/wp-content/uploads/2017/11/RTM19-banner-web.jpg'
    },
    {
        small: 'https://geographical.co.uk/media/k2/items/cache/e533c4b8d2d2d3798f3271c35ca6e050_XL.jpg',
        medium: 'https://geographical.co.uk/media/k2/items/cache/e533c4b8d2d2d3798f3271c35ca6e050_XL.jpg',
        big: 'https://geographical.co.uk/media/k2/items/cache/e533c4b8d2d2d3798f3271c35ca6e050_XL.jpg'
    },
    {
      small: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Microsoft_Office_Excel_%282018%E2%80%93present%29.svg/1101px-Microsoft_Office_Excel_%282018%E2%80%93present%29.svg.png',
      medium: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Microsoft_Office_Excel_%282018%E2%80%93present%29.svg/1101px-Microsoft_Office_Excel_%282018%E2%80%93present%29.svg.png://lh3.googleusercontent.com/9kABykeGovHPy-dN19lRxxnCp8IZK3Pkl8qLFNxrEe-hhKVZeiyhTBEIRUt6t-vhxQ',
      big: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Microsoft_Office_Excel_%282018%E2%80%93present%29.svg/1101px-Microsoft_Office_Excel_%282018%E2%80%93present%29.svg.png'
    },
    {
      small: 'https://geographical.co.uk/media/k2/items/cache/e533c4b8d2d2d3798f3271c35ca6e050_XL.jpg',
      medium: 'https://geographical.co.uk/media/k2/items/cache/e533c4b8d2d2d3798f3271c35ca6e050_XL.jpg',
      big: 'https://geographical.co.uk/media/k2/items/cache/e533c4b8d2d2d3798f3271c35ca6e050_XL.jpg'
  },
];
  }



  showDocViewer(): void{
   this.viewerToShow = this.docViewer;
  }

  showJsonViewer(): void{

    this.http.get('https://api.apify.com/v2/key-value-stores/np4eYah8M5uQtj0Su/records/LATEST?disableRedirect=true')
    .subscribe(response => {
      console.log(response);
      this.jsonContent = response;
      // {arr: [1, 3, 4]}
      // {doc: {array: [1, 3, 5]}}
    });

    this.viewerToShow = this.jsonViewer;
  }

}
