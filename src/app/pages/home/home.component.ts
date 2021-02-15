import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { Dto } from 'src/app/models/dto';
import { UsersService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  page = 0;
  userlist: User[]=[];
  fullresault: Dto;
  disablePage: boolean;
  searchvalue = '';
  constructor(private usersService:UsersService){
    this.fullresault = new Dto();
    this.disablePage = false;
  }
  ngOnInit(){
    this.loadData();
  }
  loadData(){
    this.disablePage=true;
    this.usersService.getUsers(this.page).subscribe((res:Dto)=>{
      this.fullresault =res;
      this.userlist=[];
      res.data.forEach(val => this.userlist.push(Object.assign({}, val)));
      // this.userlist = res.data;
      this.disablePage=false;
    });
  }
  pagechange(page:number){
    console.log(page);
    this.page = page;
    this.loadData();
  }
  search(searchtext:string){
    this.searchvalue = searchtext.toLowerCase();
    if(searchtext != ''){
      this.userlist = this.fullresault.data.filter((x=>{
        return x.first_name.toLowerCase().includes(this.searchvalue) || x.last_name.toLowerCase().includes(this.searchvalue);
      }));
    } else {
      this.userlist=[];
      this.fullresault.data.forEach(val => this.userlist.push(Object.assign({}, val)));
    }
  }

}
