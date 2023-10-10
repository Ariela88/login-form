import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {



  favouritesSubject = new BehaviorSubject<any[]>([]);

  constructor() {
    
    if (localStorage.getItem('saved')) {
      
      this.favouritesSubject.next(JSON.parse(localStorage.getItem('saved')!))
    }
  }

saveUser(user: any):void {
    
    const actualArray = this.favouritesSubject.value;
    const newArray = [...actualArray, user];
    this.favouritesSubject.next(newArray);
    localStorage.setItem('saved', JSON.stringify(newArray));
  }




}
