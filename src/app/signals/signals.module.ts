import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignalsRoutingModule } from './signals-routing.module';
import { RouterModule } from '@angular/router';
import { SignalsLayoutComponent } from './layout/signalsLayout/signalsLayout.component';
import { CounterPageComponent } from './pages/counterPage/counterPage.component';
import { PropertiesPageComponent } from './pages/propertiesPage/propertiesPage.component';
import { UserInfoPageComponent } from './pages/userInfoPage/userInfoPage.component';

@NgModule({
  declarations: [
    SignalsLayoutComponent,
    CounterPageComponent,
    PropertiesPageComponent,
    UserInfoPageComponent,
  ],
  imports: [CommonModule, SignalsRoutingModule],
})
export class SignalsModule {}
