import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { StorageService } from '../services/storage.service';

export const authGuard: CanActivateFn = (route, state) => {
  console.log('guardia attivata')

  const authS = inject(StorageService)
  const router = inject(Router)
  const isUserLogged = authS.checkLogged()
  if (isUserLogged) {
    return true;
  } else{
    router.navigateByUrl('/login')
    return false
  }

};
