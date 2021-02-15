import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserPageComponent } from './user-page.component';
import { UserPageComponentRoutingModule } from './user-page-routing.component.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UserPageComponentRoutingModule
  ],
  declarations: [UserPageComponent],
  exports:[UserPageComponent]
})
export class UserPageComponentModule {}

