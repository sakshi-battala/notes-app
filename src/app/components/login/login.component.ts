import { Component, signal } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { ToastService } from '../../services/toast.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  email = signal<string>('');
  password = signal<string>('');
  showPassword = false;

  isLoading = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastService: ToastService,
  ) {}

  async onLogin(event: Event) {
    event.preventDefault();

    if (!this.email() || !this.password()) {
      this.toastService.error('All fields required');
      return;
    }

    if (this.isLoading) return;
    this.isLoading = true;

    try {
      await this.authService.login({
        email: this.email(),
        password: this.password(),
      });

      this.toastService.success('Welcome back');
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
