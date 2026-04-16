import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { NotesListComponent } from '../../components/notes-list/notes-list.component';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notes-page',
  standalone: true,
  imports: [CommonModule, HeaderComponent, NotesListComponent],
  templateUrl: './notes-page.component.html',
  styleUrl: './notes-page.component.scss',
})
export class NotesPageComponent {
  constructor(private router: Router) {}

  navigateToAddNotePage() {
    this.router.navigate(['/notes/new']);
  }
}
