import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Note } from '../../models/note';

@Component({
  selector: 'app-note-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './note-form.component.html',
  styleUrl: './note-form.component.scss',
})
export class NoteFormComponent implements OnInit {
  title = '';
  content = '';

  @Input() initialData!: Note | undefined;
  @Output() onSaveNote = new EventEmitter<{ title: string; content: string }>();

  ngOnInit(): void {
    if (this.initialData) {
      this.title = this.initialData.title;
      this.content = this.initialData.content;
    }
  }

  constructor(private router: Router) {}

  onSubmit() {
    this.onSaveNote.emit({ title: this.title, content: this.content });
  }

  onBack() {
    this.router.navigate(['/notes']);
  }
}
