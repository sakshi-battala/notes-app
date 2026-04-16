import { Component, computed } from '@angular/core';

import { NotesStore } from '../../store/notes.store';
import { NoteCardComponent } from '../note-card/note-card.component';

@Component({
  selector: 'app-notes-list',
  standalone: true,
  imports: [NoteCardComponent],
  templateUrl: './notes-list.component.html',
  styleUrl: './notes-list.component.scss',
})
export class NotesListComponent {
  constructor(public store: NotesStore) {}

  pinnedNotes = computed(() =>
    this.store.filteredNotes().filter((note) => note.isPinned),
  );

  otherNotes = computed(() =>
    this.store.filteredNotes().filter((note) => !note.isPinned),
  );

  // UI helpers
  hasNotes = computed(() => this.store.filteredNotes().length > 0);

  hasPinned = computed(() => this.pinnedNotes().length > 0);

  hasSearchTerm = computed(() => this.store.searchTerm() !== '');

  hasOthers = computed(() => this.otherNotes().length > 0);
}
