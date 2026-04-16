import { Component } from '@angular/core';
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
  constructor(public store: NotesStore) {}

  onSearch(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.store.setSearchTerm(value);
  }
}
