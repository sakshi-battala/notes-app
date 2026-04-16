import { computed, effect, Injectable, signal } from '@angular/core';
import { Note } from '../models/note';

@Injectable({ providedIn: 'root' })
export class NotesStore {
  private storageKey = 'notes';
  searchTerm = signal('');

  notes = signal<Note[]>(this.loadDataFromStorage());

  constructor() {
    effect(() => {
      localStorage.setItem('notes', JSON.stringify(this.notes()));
    });
  }

  // load data from local storage
  private loadDataFromStorage(): Note[] {
    try {
      const data = localStorage.getItem(this.storageKey);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      return [];
    }
  }

  //add notes
  addNote(title: string, content: string) {
    const newNote = { id: Date.now(), title, content, isPinned: false };
    this.notes.update((prev) => [...prev, newNote]);
  }

  // delete notes
  deleteNote(id: number) {
    this.notes.update((prev) => {
      return prev.filter((note) => note.id !== id);
    });
  }

  // update notes
  updateNote(id: number, title: string, content: string) {
    this.notes.update((prev) =>
      prev.map((note) => (note.id === id ? { ...note, title, content } : note)),
    );
  }

  // toggle pin notes
  togglePin(id: number) {
    this.notes.update((prev) =>
      prev.map((note) =>
        note.id === id ? { ...note, isPinned: !note.isPinned } : note,
      ),
    );
  }

  private debounceTimer: any;

  //implemented debouncing
  setSearchTerm(value: string) {
    clearTimeout(this.debounceTimer);

    this.debounceTimer = setTimeout(() => {
      this.searchTerm.set(value);
    }, 400);
  }

  // search filter
  filteredNotes = computed(() => {
    const term = this.searchTerm().toLowerCase();
    const notes = this.notes();

    const filtered = !term
      ? notes
      : notes.filter(
          (note) =>
            note.title.toLowerCase().includes(term) ||
            note.content.toLowerCase().includes(term),
        );

    const pinned = filtered.filter((note) => note.isPinned);
    const others = filtered.filter((note) => !note.isPinned);

    return [...pinned, ...others];
  });
}
