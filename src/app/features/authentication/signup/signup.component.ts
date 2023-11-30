import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
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
import { MatSelectModule } from '@angular/material/select';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { JsonPipe } from '@angular/common';

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
    MatSelectModule,
    JsonPipe
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
      .header {
        margin-top: 10rem !important;
      }
    `,
  ],
})
export class SignupComponent {
  ahzab: {
    from: number;
    to: number;
  }[] = [];
  numbers: number[] = [];
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

  hizbFormGroup: FormGroup;

  isOptional = false;

  constructor(
    private _formBuilder: FormBuilder,
    public passwordStrengthValidator: PasswordValidators
  ) {
    for (let i = 1; i <= 604; i++) {
      this.numbers.push(i);
    }
    this.hizbFormGroup = this._formBuilder.group({
      ahzabArray: this._formBuilder.array([]),
    });
  }

  getFormControl(ahzabGroup: AbstractControl, controlName: string): FormControl {
    return ahzabGroup.get(controlName) as FormControl;
  }

  firstFormSubmitted() {
    console.log('firstFormGroup', this.firstFormGroup.value);
  }

  get ahzabArray(): FormArray {
    return this.hizbFormGroup.get('ahzabArray') as FormArray;
  }

  createAhzabGroup(): FormGroup {
    return this._formBuilder.group({
      from: [0, Validators.required],
      to: [0, Validators.required],
    });
  }

  addAhzab() {
    this.ahzabArray.push(this.createAhzabGroup());
  }

  dropAhzab(index: number) {
    this.ahzabArray.removeAt(index);
  }

  secondFormSubmitted() {
    console.log('secondFormGroup', this.secondFormGroup.value);
  }

  hizbFormGroupSubmitted() {
    console.log('hizbFormGroup', this.hizbFormGroup.value);
  }
}
