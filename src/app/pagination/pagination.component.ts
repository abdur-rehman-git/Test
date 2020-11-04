import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {
  images=['https://cdn.carbuzz.com/gallery-images/840x560/737000/500/737522.jpg','https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/images/car-reviews/first-drives/legacy/aaudi_1.jpg?itok=DVlHK7hL','https://c4.wallpaperflare.com/wallpaper/565/558/457/harley-davidson-harley-modified-motorcycle-wallpaper-thumb.jpg']
  myimg:String
  
  constructor() { }

  
  here(index:number){
  this.myimg=this.images[index]
  }
  nxt(ind:number){
      ind = ind + 1; 
      // ind = ind % this.myimg.length; 
      return this.images[ind];
  }
}
