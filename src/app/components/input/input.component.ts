import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { InputErrorComponent } from './../input-error/input-error.component';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    InputErrorComponent,
    FormsModule
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => InputComponent),
    },
  ]
})
export class InputComponent implements ControlValueAccessor {

  @Input() type: 'text' | 'password' = 'text';

  @Input() placeholder: string = '';

  private onChange = (value: string): void => {};

  private onTouched = (): void => {};

  public value: string | undefined;

  public inputChanged(value: string) {
    this.value = value;
    this.onChange(value);
    this.onTouched();
  }

  public writeValue(value: string): void {
    this.value = value;
  }

  public registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
}
