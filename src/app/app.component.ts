import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/product.service';
import { User } from './models/user';
import { Dto } from './models/dto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'maidtest';
  constructor(){

  }
  ngOnInit(){

  }

}
