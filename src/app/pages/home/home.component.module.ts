import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { HeaderComponentModule } from 'src/app/components/header/header.module';
import { UserComponentModule } from 'src/app/components/user/user.module';
import { HomeComponentRoutingModule } from './home-routing.component.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HomeComponentRoutingModule,
    HeaderComponentModule,
    UserComponentModule,
  ],
  declarations: [HomeComponent],
  exports:[HomeComponent]
})
export class HomeComponentModule {}

