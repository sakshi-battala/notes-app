import { inject } from '@angular/core';
import { Auth, authState } from '@angular/fire/auth';
import { CanActivateFn, Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';

export const authGuard: CanActivateFn = async () => {
  const router = inject(Router);
  const auth = inject(Auth);

  // it waits util firebase gives the user, then continue since firebase is async
  const user = await firstValueFrom(authState(auth));

  if (user) return true;
  return router.createUrlTree(['/login']);
};
