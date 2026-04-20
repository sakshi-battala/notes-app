import { Component, Input } from '@angular/core';
import { Note } from '../../models/note';
import { NotesStore } from '../../store/notes.store';
import { Router } from '@angular/router';
import { ToastService } from '../../services/toast.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-note-card',
  standalone: true,
  imports: [ConfirmDialogComponent],
  templateUrl: './note-card.component.html',
  styleUrl: './note-card.component.scss',
})
export class NoteCardComponent {
  @Input({ required: true }) note!: Note;

  showDeletePopup = false;

  constructor(
    private store: NotesStore,
    private router: Router,
    private toastService: ToastService,
  ) {}

  private colors = [
    '#5c6bc0', // Indigo
    '#66bb6a', // Green
    '#ef5350', // Red/Pink
    '#42a5f5', // Blue
    '#ab47bc', // Purple
    '#ffa726', // Orange
  ];

  get backgroundColor(): string {
    // This ensures a specific note always gets the same color based on its ID
    const hash = this.note.id
      .toString()
      .split('')
      .reduce((acc: number, char: string) => acc + char.charCodeAt(0), 0);
    return this.colors[hash % this.colors.length];
  }

  delete(event: Event) {
    event.stopPropagation();
    this.showDeletePopup = true;
  }

  confirmDelete() {
    this.showDeletePopup = false;
    this.store.deleteNote(this.note.id);
    this.toastService.success('Note deleted!');
  }

  cancelDelete() {
    this.showDeletePopup = false;
  }

  onOpenNote() {
    this.router.navigate(['/notes', this.note.id]);
  }

  onTogglePin(event: Event) {
    event.stopPropagation();
    this.store.togglePin(this.note.id);
  }
}
