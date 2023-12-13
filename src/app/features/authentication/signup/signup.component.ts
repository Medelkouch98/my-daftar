import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PasswordValidators } from '../../../core/validators/password.validators';
import { RouterLink } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { signupContactComponent } from './signup-contact/signup-contact.component';
import { signupPersonalComponent } from './signup-personal/signup-personal.component';
import { signupPagesComponent } from './signup-pages/signup-pages.component';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    RouterLink,
    MatSelectModule,
    signupPersonalComponent,
    signupContactComponent,
    signupPagesComponent,
  ],
  templateUrl: './signup.component.html',
  styles: [],
})
export class SignupComponent {
  ahzab: {
    from: number;
    to: number;
  }[] = [];
  numbers: number[] = [];

  firstFormGroup = this._formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    userName: ['', Validators.required],
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

  ahzabGroup = this._formBuilder.group({
    from: [0, Validators.required],
    to: [0, Validators.required],
  });

  isOptional = false;

  constructor(
    private _formBuilder: FormBuilder,
    public passwordStrengthValidator: PasswordValidators
  ) {
    this.hizbFormGroup = this._formBuilder.group({
      ahzabArray: this._formBuilder.array([]),
    });
  }

  onSubmit(): void {
    const request: unknown = {
      ...this.firstFormGroup.getRawValue(),
      ...this.secondFormGroup.getRawValue(),
      ...this.hizbFormGroup.getRawValue(),
    };
    console.log(request);
  }
}
