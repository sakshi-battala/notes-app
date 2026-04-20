# Notes App

A modern Angular 17 notes application built with standalone components and Angular Signals. This app demonstrates a lightweight signal-based store, local persistence, and responsive note management without NgRx. It features a seamless dark/light theme toggle for enhanced user experience and accessibility.

## Features

- **Note Management**: Add, edit, and delete notes with a clean, intuitive UI
- **Instant Search**: Search notes using computed signals for real-time filtering
- **Local Persistence**: Persist notes in `localStorage` using `effect()` for automatic saving
- **Toast Notifications**: User feedback on actions via toast messages
- **Theme Toggle**: Switch between dark and light themes for comfortable viewing
- **Responsive Design**: Works seamlessly across devices
- **Standalone Components**: Reusable UI components with clear architecture

## Tech Stack

- Angular 17
- Standalone components
- Angular Signals (`signal`, `computed`, `effect`)
- LocalStorage for persistence
- CSS Variables for theming
- TypeScript, HTML, SCSS

## Folder Structure

```text
src/
  app/
    components/
      header/             # App header with search and theme toggle
      note-card/          # Display individual notes
      note-form/          # Note creation/edit form
      notes-list/         # List view for notes
      confirm-dialog/     # Confirmation dialog for deletions
    pages/
      notes-page/         # Main notes page
      edit-note-page/     # Note editing page
    services/
      toast.service.ts    # Toast notification service
    store/
      notes.store.ts      # Signal-based state management for notes
    models/
      note.ts             # Note data model
  assets/
  styles/
    _variables.scss       # App style variables and theme definitions
```

This structure keeps pages and reusable components separate, with a dedicated signal store and service layer for clean state handling.

## How it works

- **State Management**: `signal()` stores the app state for notes, while `computed()` derives filtered results from the main note list for search and list views.
- **Persistence**: `effect()` watches the note state and syncs it to `localStorage` automatically, ensuring notes are saved instantly.
- **Reactivity**: Components consume signals directly, so UI updates reactively when notes change.
- **Theming**: CSS variables define color schemes for dark and light themes. The theme toggle in the header switches the `light-theme` class on the body, updating the entire app's appearance instantly.

## User Flow

1. **Launch the App**: Open the app in your browser after running `npm start`.
2. **Add a Note**: Use the note form at the top to create a new note by entering a title and content.
3. **View Notes**: Newly added notes appear in the list below, displayed as cards.
4. **Search Notes**: Type in the search bar in the header to filter notes instantly by title or content.
5. **Edit a Note**: Click the edit button on a note card to navigate to the edit page, modify the content, and save changes.
6. **Delete a Note**: Click the delete button on a note card, confirm in the dialog, and the note is removed.
7. **Toggle Theme**: Click the theme toggle button (sun/moon icon) in the header to switch between dark and light modes.
8. **Persistence**: All changes (add, edit, delete, reorder) are automatically saved to localStorage and persist across sessions.

## Installation and Setup

```bash
npm install
npm start
```

Then open the app in your browser at the local development URL shown in the terminal.

Or try the live demo at [https://notes-app-zeta-ashy-96.vercel.app/notes](https://notes-app-zeta-ashy-96.vercel.app/notes).

## Usage

1. Add a note using the form at the top of the page.
2. Search notes with the search input in the header to filter results instantly.
3. Click the edit icon on a note card to modify an existing note.
4. Click the delete icon on a note card and confirm to remove it from the list.
5. Toggle between dark and light themes using the theme button (sun/moon icon) in the header for comfortable viewing.

## Future Improvements

- Add backend integration for user accounts and remote persistence
- Implement authentication and user-specific notes
- Sync notes across devices with a cloud API
- Add rich text editing and note categories/tags
- Implement note sharing and collaboration features
- Add keyboard shortcuts for common actions

## Screenshots

<p align="center">
  <img src="https://github.com/user-attachments/assets/9338bb97-725d-4653-887e-47e6f8108d1f" width="45%" />
  <img src="https://github.com/user-attachments/assets/b27c4d3a-d934-44c7-a61f-6e1f0a431785" width="45%" />
</p>

<p align="center">
   <img src="https://github.com/user-attachments/assets/1244097a-389f-42c0-a0cf-5721810c64cd" width="45%" />
   <img src="https://github.com/user-attachments/assets/3bc008d7-4d6c-4c04-b8c5-6e46f435ea54" width="45%" />
</p>

## 🤝 Contributing

Contributions are welcome! Feel free to fork the repo and submit a pull request.
