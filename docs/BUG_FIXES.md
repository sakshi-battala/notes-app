# Bug Fix Documentation

## Bug 1: User becomes null on refresh

### Description
On page refresh, the authenticated user was initially shown as null.

### Cause
Firebase restores the authentication state asynchronously.  
So `currentUser` was not immediately available when the app loaded.

### Fix
Used `onAuthStateChanged` in AuthService to listen for authentication changes and update the user state.

### Implementation
```ts
onAuthStateChanged(this.auth, (user) => {
  this.user.set(user);
});
```

### Result
The application now correctly restores the user session after refresh.


# Bug 2: Multiple API Calls on Signup/Login

## Description

Clicking the signup or login button multiple times triggers duplicate API requests.

## Cause

No restriction on multiple button clicks during API execution.

## Fix

Introduced a loading state and disabled the button while the request is in progress.

## Implementation
```javascript
if (this.isLoading) return;
this.isLoading = true;
<button [disabled]="isLoading"></button>
```

## Result

Prevents duplicate API calls and avoids inconsistent behavior.

# Bug 3: Missing Form Validation

## Description

Users were able to submit empty email or password fields.

## Cause

No validation before calling authentication APIs.

## Fix

Added basic validation to check for required fields before making API calls.

## Implementation
```javascript
if (!this.email() || !this.password()) {
  this.toastService.error('All fields are required');
  return;
}
```

## Result

Improved user experience and reduced unnecessary API calls.