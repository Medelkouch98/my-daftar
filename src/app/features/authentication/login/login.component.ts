import { MatInputModule } from '@angular/material/input';
import { Component } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatFormFieldModule, RouterLink],
  templateUrl: './login.component.html',
})
export class LoginComponent {}
