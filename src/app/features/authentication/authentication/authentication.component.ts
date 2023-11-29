import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-authentication',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './authentication.component.html',
})
export class AuthenticationComponent {}
