import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  changeView: string;

  figureChange : string;

  ratingBuy :string;

  info: string;

  listActive: string;

  @Input() list:any;

  constructor() { }

  ngOnInit(): void {

    // this.gridView();
    this.listView();
    
  }
  
  gridView(){
    this.changeView = 'col-12 col-sm-6 col-md-4 col-lg-3 card';
    this.figureChange = 'p-gallery__figure-grid';
    this.ratingBuy = 'justify-content-around '

  }

  listView() {
    this.changeView = 'col-12 d-flex';
    this.listActive = '';
    this.figureChange = 'p-gallery__figure-list align-items-center ';
    this.info = ''
    this.ratingBuy = 'justify-content-between'

  }

}