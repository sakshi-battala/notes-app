import { Routes } from '@angular/router';
import { NotesPageComponent } from './pages/notes-page/notes-page.component';
import { EditNotePageComponent } from './pages/edit-note-page/edit-note-page.component';

export const routes: Routes = [
  { path: '', redirectTo: 'notes', pathMatch: 'full' },
  { path: 'notes', component: NotesPageComponent }, // all notes
  { path: 'notes/new', component: EditNotePageComponent }, // adding new note
  { path: 'notes/:id', component: EditNotePageComponent }, // updating the existing note
];
