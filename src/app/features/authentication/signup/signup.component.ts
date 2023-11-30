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
import { PasswordValidators } from '../../../core/validators/password.validators';
import { RouterLink } from '@angular/router';

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
    RouterLink,
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
      ::ng-deep .mat-horizontal-stepper-header {
        padding: 0px 40px !important;
      }
    `,
  ],
})
export class SignupComponent {
  firstFormGroup = this._formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    username: ['', Validators.required],
    password: [
      '',
      Validators.compose([
        Validators.required,
        this.passwordStrengthValidator.validatePasswordPattern,
      ]),
    ],
    confirmPassword: [
      '',
      Validators.compose([
        Validators.required,
        this.passwordStrengthValidator.validatePasswordPattern,
      ]),
    ],
  });
  secondFormGroup = this._formBuilder.group({
    lastName: ['', Validators.required],
    firstName: ['', Validators.required],
    city: ['', Validators.required],
    birthDate: ['', Validators.required],
  });
  isOptional = false;

  constructor(
    private _formBuilder: FormBuilder,
    public passwordStrengthValidator: PasswordValidators
  ) {}

  firstFormSubmitted() {
    console.log('firstFormGroup', this.firstFormGroup.value);
  }

  secondFormSubmitted() {
    console.log('secondFormGroup', this.secondFormGroup.value);
  }
}
