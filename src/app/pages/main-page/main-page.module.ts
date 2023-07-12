import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageRoutingModule } from './main-page-routing.module';
import { MainPageComponent } from './page/main-page.component';
import { TableComponent } from './components/table/table.component';
import { LoaderComponent } from './../../components/loader/loader.component';
import { LogoutComponent } from './../../components/logout/logout.component';

@NgModule({
  declarations: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    MainPageRoutingModule,
    TableComponent,
    LoaderComponent,
    LogoutComponent
  ],
  exports: [
    MainPageComponent
  ]
})
export class MainPageModule { }
