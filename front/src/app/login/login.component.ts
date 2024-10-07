import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}
  onLogin(): void {
    this.authService.login(this.email, this.password).subscribe({
      next: () => {
        this.errorMessage = '';
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        console.log(err);

        this.errorMessage = err.error.message;

        setTimeout(() => {
          this.errorMessage = '';
        }, 2000);
      },
    });
  }
}
