import { MatInputModule } from '@angular/material/input';
import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatFormFieldModule, RouterLink],
  templateUrl: './confirm-signup.component.html',
  styles: [
    `
      .header{
        margin-top: 10rem !important;
        font-size: 2.5rem !important;
        font-family: 'Roboto' !important;
      }
    `,
  ],
})
export class ConfirmSignupComponent {}
