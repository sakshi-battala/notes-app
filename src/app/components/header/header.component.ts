import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NotesStore } from '../../store/notes.store';
import { AuthService } from '../../services/auth.service';
import { ToastService } from '../../services/toast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isDarkMode = signal(true);

  constructor(
    private store: NotesStore,
    private authService: AuthService,
    private toastService: ToastService,
    private router: Router,
  ) {}

  onSearch(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.store.setSearchTerm(value);
  }

  toggleTheme() {
    this.isDarkMode.set(!this.isDarkMode());

    if (this.isDarkMode()) {
      document.body.classList.remove('light-theme');
    } else {
      document.body.classList.add('light-theme');
    }
  }

  async onLogout() {
    try {
      await this.authService.logout();
      this.toastService.success('See you soon!');
      this.router.navigateByUrl('/login');
    } catch (error: any) {
      this.toastService.error('Logout failed');
    }
  }
}
