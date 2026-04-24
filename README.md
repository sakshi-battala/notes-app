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
- Firebase Authentication (Email/Password)
- LocalStorage for note persistence
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
      login/              # User login form
      signup/             # User registration form
    pages/
      notes-page/         # Main notes page (protected by auth guard)
      edit-note-page/     # Note editing page
    services/
      auth.service.ts     # Firebase authentication service
      toast.service.ts    # Toast notification service
    guards/
      auth.guard.ts       # Route guard for protected pages
      guest.guard.ts      # Route guard for guest pages (login/signup)
    store/
      notes.store.ts      # Signal-based state management for notes
    models/
      note.ts             # Note data model
      user.ts             # User authentication model
    firebase.config.ts    # Firebase configuration and initialization
  assets/
  styles/
    _variables.scss       # App style variables and theme definitions
```

This structure keeps pages and reusable components separate, with a dedicated signal store and service layer for clean state handling. Authentication guards ensure only logged-in users can access the main notes page.

## How it works

- **State Management**: `signal()` stores the app state for notes, while `computed()` derives filtered results from the main note list for search and list views.
- **Persistence**: `effect()` watches the note state and syncs it to `localStorage` automatically, ensuring notes are saved instantly.
- **Reactivity**: Components consume signals directly, so UI updates reactively when notes change.
- **Theming**: CSS variables define color schemes for dark and light themes. The theme toggle in the header switches the `light-theme` class on the body, updating the entire app's appearance instantly.

## Firebase Authentication

This application uses **Firebase Authentication** exclusively for user account management. User authentication (signup, login, logout) is handled by Firebase with email/password credentials. **Note data is stored locally using localStorage, not in Firebase**.

### How Authentication Works

1. **User Signup**: New users create an account by providing email and password, which is securely stored in Firebase
2. **User Login**: Existing users authenticate with their Firebase credentials
3. **Session Tracking**: The app monitors authentication state in real-time. If a user is logged in, they stay logged in even after closing the browser
4. **Protected Routes**: The auth guard checks if a user is authenticated before allowing access to the notes page
5. **Unauthenticated Access**: If a user is not logged in, they are automatically redirected to the login page
6. **User Logout**: When a user logs out, their session ends and they are redirected to the login page

### Note Storage

Notes are **not** stored in Firebase. Instead:

- All notes are saved to the browser's local storage automatically
- Notes persist across browser sessions but are specific to each user and browser
- If a user logs in on a different device or browser, they won't see notes from another device
- The app uses Angular Signals to automatically sync note changes to localStorage

### Components Involved

- **Login Component**: Form where users enter email/password credentials to authenticate with Firebase
- **Signup Component**: Form where new users create accounts on Firebase
- **Notes Page**: Protected route that displays and manages notes stored in localStorage
- **Auth Service**: Manages Firebase authentication operations (login, signup, logout, session tracking)
- **Auth Guard**: Protects routes by checking authentication status before allowing access

## User Flow

1. **Launch the App**: Open the app in your browser after running `npm start`.
2. **Authentication Required**: If not logged in, you're redirected to the login page.
3. **Create Account or Login**:
   - **New User**: Click "Sign Up" and create an account with email and password on Firebase
   - **Existing User**: Enter your credentials and click "Login" to authenticate with Firebase
4. **Firebase Verification**: Firebase securely verifies your credentials
5. **Access Notes**: Once authenticated, you're redirected to `/notes` page
6. **Add a Note**: Use the note form at the top to create a new note by entering a title and content.
7. **View Notes**: Newly added notes appear in the list below, displayed as cards.
8. **Search Notes**: Type in the search bar in the header to filter notes instantly by title or content.
9. **Edit a Note**: Click the edit button on a note card to navigate to the edit page, modify the content, and save changes.
10. **Delete a Note**: Click the delete button on a note card, confirm in the dialog, and the note is removed.
11. **Toggle Theme**: Click the theme toggle button (sun/moon icon) in the header to switch between dark and light modes.
12. **Logout**: Click the logout button to end your session and return to the login page.
13. **Persistence**:
    - Notes are automatically saved to localStorage in your browser
    - Notes persist across browser sessions but only on this device
    - Each login session can have different notes depending on the browser or device used

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

- Add cloud-based note syncing across devices using Firestore
- Implement user-specific notes stored server-side
- Sync notes across devices with cloud backup
- Implement note categories, tags, and collections
- Add rich text editing capabilities
- Implement note sharing and collaboration features
- Add keyboard shortcuts for common actions
- Support for note attachments and images
- Add password recovery and email verification

## Screenshots

<p align="center">
  <img width="45%" src="https://github.com/user-attachments/assets/15b23a8e-3e4a-4d08-a50f-c9a32f4139ba" />
  <img width="45%" src="https://github.com/user-attachments/assets/8e986d49-b7bf-407b-a19a-81ef3e5141e0" />
</p>

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
