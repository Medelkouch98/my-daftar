import { MatButtonModule } from '@angular/material/button';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-authentication',
  standalone: true,
  imports: [RouterLink, MatButtonModule],
  templateUrl: './authentication.component.html',
})
export class AuthenticationComponent {}
