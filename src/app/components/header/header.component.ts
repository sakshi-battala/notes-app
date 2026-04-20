import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NotesStore } from '../../store/notes.store';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isDarkMode = signal(true);

  constructor(public store: NotesStore) {}

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
}
