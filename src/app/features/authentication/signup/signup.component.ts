import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    MatStepperModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  templateUrl: './signup.component.html',
  styles: [
    `
      ::ng-deep .mat-step-icon-selected {
        background-color: #005212 !important;
      }
      ::ng-deep .mat-step-icon-state-edit {
        background-color: #005212 !important;
      }
      ::ng-deep .mdc-notched-outline {
        border: 2px solid #005212;
        border-radius: 8px;
        margin-top: 5px;
        left: -6px !important;
        height: 48px !important;
        width: 70vw !important;
        max-width: 100vw !important;
      }
    `,
  ],
})
export class SignupComponent {
  firstFormGroup = this._formBuilder.group({
    email: [''],
    username: [''],
    password: [''],
    confirmPassword: [''],
  });
  secondFormGroup = this._formBuilder.group({
    lastName: [''],
    firstName: [''],
    city: [''],
    birthDate: [''],
  });
  isOptional = false;

  constructor(private _formBuilder: FormBuilder) {}
}
