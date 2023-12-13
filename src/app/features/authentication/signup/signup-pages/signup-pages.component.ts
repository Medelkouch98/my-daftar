import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-signup-pages',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
  ],
  templateUrl: './signup-pages.component.html',
})
export class signupPagesComponent {
  @Input({ required: true }) form!: FormGroup;
  @Output() submitForm: EventEmitter<void> = new EventEmitter<void>();
  @Input({ required: true }) ahzabFrom!: FormGroup;
  numbers: number[] = [];
  constructor() {
    for (let i = 1; i <= 604; i++) {
      this.numbers.push(i);
    }
  }

  getFormControl(
    ahzabGroup: AbstractControl,
    controlName: string
  ): FormControl {
    return ahzabGroup.get(controlName) as FormControl;
  }

  get ahzabArray(): FormArray {
    return this.form.get('ahzabArray') as FormArray;
  }

  addAhzab() {
    this.ahzabArray.push(this.ahzabFrom);
  }

  dropAhzab(index: number) {
    this.ahzabArray.removeAt(index);
  }
}
