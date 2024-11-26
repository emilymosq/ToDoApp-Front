import { Injectable } from '@angular/core';
import {BehaviorSubject, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  private userData: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  setUser() {
    this.userData.next({})
  }
}
