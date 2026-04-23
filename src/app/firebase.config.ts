import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

export const firebaseConfig = {
  apiKey: 'AIzaSyCNBNsIvEXnXC5NK9ByOibWQ31OKFL7cpc',
  authDomain: 'notes-app-6e322.firebaseapp.com',
  projectId: 'notes-app-6e322',
  storageBucket: 'notes-app-6e322.firebasestorage.app',
  messagingSenderId: '812885967242',
  appId: '1:812885967242:web:3d1d52bf277c5e3d470873',
  measurementId: 'G-57BJZPDE4G',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// authenctication service which give login system etc
export const firebaseAuth = getAuth(app)