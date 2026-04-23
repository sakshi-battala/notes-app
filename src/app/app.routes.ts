import { Routes } from '@angular/router';
import { NotesPageComponent } from './pages/notes-page/notes-page.component';
import { EditNotePageComponent } from './pages/edit-note-page/edit-note-page.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './guards/auth.guard';
import { guestGuard } from './guards/guest.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'notes',
    pathMatch: 'full',
  },
  {
    path: 'notes',
    component: NotesPageComponent,
    canActivate: [authGuard],
  },
  {
    path: 'notes/new',
    component: EditNotePageComponent,
    canActivate: [authGuard],
  },
  {
    path: 'notes/:id',
    component: EditNotePageComponent,
    canActivate: [authGuard],
  },
  {
    path: 'signup',
    component: SignupComponent,
    canActivate: [guestGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [guestGuard],
  },
];
