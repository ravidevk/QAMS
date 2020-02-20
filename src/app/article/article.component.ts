import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from '../config.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  post = {};

  constructor(private route:ActivatedRoute, private config:ConfigService,private loc:Location) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
     this.post = this.getPostById(id);
  }


  getPostById(id:number){
    return this.config.getPostById(id);
    
  }

  goBack(){
    console.log('inside go Back method.')
     this.loc.back();
  }

}
