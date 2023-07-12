import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginPageRoutingModule } from './login-page-routing.module';
import { LoginPageComponent } from './page/login-page.component';
import { ButtonComponent } from './../../components/button/button.component';
import { InputComponent } from './../../components/input/input.component';

@NgModule({
  declarations: [
    LoginPageComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LoginPageRoutingModule,
    FormsModule,
    InputComponent,
    ButtonComponent,
  ],
  exports: [
    LoginPageComponent
  ]
})
export class LoginPageModule { }
