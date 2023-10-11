import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  checkLogged() {
if(localStorage.getItem('isLogged')){

  const isLogged = localStorage.getItem('isLogged')
  if(isLogged === 'true'){
    return true
  } else{
    return false
  }

} else {
  return false}

  }



  saveLogin() {
    localStorage.setItem('isLogged', JSON.stringify(true))
  }



  saveUser(user: User): void {

    localStorage.setItem('saved', JSON.stringify(user));
  }

  checkUser(username: string, password: string): boolean {

    if (localStorage.getItem('saved')) {
      const userString = localStorage.getItem('saved')
      const user = JSON.parse(userString!)
      console.log(username,user)

      const isUsernameValid = username === user.username
      const isPasswordValid = password === user.password

      console.log(isUsernameValid,isPasswordValid)
      const isLoginValid = isPasswordValid && isUsernameValid

      if (isLoginValid) {
        return true
      } else {
        return false
      }

    } else {
      return false
    }

  }



}
