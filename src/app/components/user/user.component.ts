import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/models/user';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() user:User;
  constructor(private router: Router,) {
    this.user = new User();
   }

  ngOnInit() {
  }
  gotopage(){
    const navigationExtras: NavigationExtras = {
      queryParams: {
        user: JSON.stringify(this.user)
      }
    };
    this.router.navigate(['/user'], navigationExtras);
  }
}
