import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  email = signal<string>('');
  password = signal<string>('');
  showPassword = false;

  isLoading = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastService: ToastService,
  ) {}

  async onSignup(event: Event) {
    event.preventDefault();

    if (!this.email() || !this.password()) {
      this.toastService.error('All fields required');
      return;
    }

    if (this.isLoading) return;
    this.isLoading = true;

    try {
      await this.authService.signup({
        email: this.email(),
        password: this.password(),
      });
      this.toastService.success('Account created');
      this.router.navigateByUrl('/notes');
    } catch (error: any) {
      const message = error.code
        .replace('auth/', '')
        .replace(/-/g, ' ')
        .replace(/\b\w/g, (c: any) => c.toUpperCase());
      this.toastService.error(message);
    } finally {
      this.isLoading = false;
      this.email.set('');
      this.password.set('');
    }
  }
}
