import { LoaderComponent } from './../loader/loader.component';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    LoaderComponent
  ]
})
export class ButtonComponent {

  @Input() isLoading: boolean = false;

  @Input() disabled: boolean = false;

}
