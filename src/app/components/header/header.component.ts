import { Component, OnInit,OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { PageChangedEvent } from 'ngx-bootstrap/pagination/public_api';
import { Dto } from 'src/app/models/dto';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,OnChanges {
  @Input() info: Dto;
  @Output() newAdded = new EventEmitter<number>();
  @Output() searchValue=new EventEmitter<string>();
  searchtext = '';
  constructor() {
    this.info = new Dto();
   }
  // setPage(pageNo: number): void {
  //   this.currentPage = pageNo;
  // }

  pageChanged(event: PageChangedEvent): void {
    this.newAdded.emit(event.page);
  }
  ngOnInit() {
  }
  gosearch(value:string){
    console.log(this.searchtext);
    this.searchValue.emit(value);
  }
  ngOnChanges(){

  }
}
