import { Component, OnInit } from '@angular/core';
import { NoteFormComponent } from '../../components/note-form/note-form.component';
import { NotesStore } from '../../store/notes.store';
import { ActivatedRoute, Router } from '@angular/router';
import { Note } from '../../models/note';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-edit-note-page',
  standalone: true,
  imports: [NoteFormComponent],
  templateUrl: './edit-note-page.component.html',
  styleUrl: './edit-note-page.component.scss',
})
export class EditNotePageComponent implements OnInit {
  noteId!: number;
  note!: Note | undefined;

  constructor(
    private store: NotesStore,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toastService: ToastService,
  ) {}

  ngOnInit(): void {
    this.noteId = Number(this.activatedRoute.snapshot.paramMap.get('id'));

    if (this.noteId) {
      this.note = this.store.notes().find((note) => note.id === this.noteId);
    }
  }

  onSaveNote(data: { title: string; content: string }) {
    if (this.noteId) {
      this.store.updateNote(this.noteId, data.title, data.content);
      this.toastService.success('Note updated');
    } else {
      this.store.addNote(data.title, data.content);
      this.toastService.success('Note created');
    }

    this.router.navigate(['/notes']);
  }
}
