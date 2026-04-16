# Notes App

A modern Angular 17 notes application built with standalone components and Angular Signals. This app demonstrates a lightweight signal-based store, local persistence, drag-and-drop ordering, and responsive note management without NgRx.

## Features

- Add, edit, and delete notes with a clean UI
- Search notes using computed signals for instant filtering
- Persist notes in `localStorage` using `effect()`
- Toast notifications for user feedback on actions
- Standalone components for reusable UI and clear architecture

## Tech Stack

- Angular 17
- Standalone components
- Angular Signals (`signal`, `computed`, `effect`)
- LocalStorage for persistence
- TypeScript, HTML, SCSS

## Folder Structure

```text
src/
  app/
    components/
      header/             # App header component
      note-card/          # Display individual notes
      note-form/          # Note creation/edit form
      notes-list/         # List view for notes
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
    _variables.scss       # App style variables
```

This structure keeps pages and reusable components separate, with a dedicated signal store and service layer for clean state handling.

## How it works

- `signal()` stores the app state for notes.
- `computed()` derives filtered results from the main note list for search and list views.
- `effect()` watches the note state and syncs it to `localStorage` automatically.
- Components consume signals directly, so UI updates reactively when notes change.
- Drag-and-drop changes the order of notes in the store, and the updated list persists immediately.

## Installation and Setup

```bash
npm install
npm start
```

Then open the app in your browser at the local development URL shown in the terminal.

## Usage

1. Add a note using the form.
2. Search notes with the search input to filter results instantly.
3. Click edit to modify an existing note.
4. Delete a note to remove it from the list.
5. Drag notes to reorder them, and the order will be saved locally.

## Future Improvements

- Add backend integration for user accounts and remote persistence
- Implement authentication and user-specific notes
- Sync notes across devices with a cloud API
- Add rich text editing and note categories/tags

## Screenshots

<p align="center">
  <img src="https://github.com/user-attachments/assets/4b25e8f5-5414-4446-8d74-c7cce8abe17e" width="700" />
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/62b2108f-764d-44e8-b289-d5554b4db254" width="700" />
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/aba75bf7-a95d-4753-be03-3e6dd834e2c2" width="700" />
</p>

## 🤝 Contributing

Contributions are welcome! Feel free to fork the repo and submit a pull request.
