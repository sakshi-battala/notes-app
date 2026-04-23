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
