import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/models/user';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {
  user:User;
  constructor(
    private location:Location,
    private route: ActivatedRoute,) {
    this.user= new User();
   }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.user = JSON.parse(params['user']);
    });
  }
  goback(){
    this.location.back();
  }

}
