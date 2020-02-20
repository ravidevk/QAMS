import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  copyright={};
  constructor(private config:ConfigService) { }

  ngOnInit() {
    this.copyright = this.getCopyRightText();
  }

  getCopyRightText(){
    return this.config.getConfig().footer;
  }

}
