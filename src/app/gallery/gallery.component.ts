import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
   galleryArr = [];
  constructor(private config:ConfigService) { }

  ngOnInit() {
    this.galleryArr = this.getGallerys();
  }

  getGallerys(){
    return this.config.getConfig().gallerys;
  }

}
