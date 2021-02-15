import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PaginationModule
  ],
  declarations: [HeaderComponent],
  exports:[HeaderComponent],
})
export class HeaderComponentModule {}
