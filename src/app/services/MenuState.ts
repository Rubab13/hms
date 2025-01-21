import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root',
})

export class MenuState {
  private booleanSubject = new BehaviorSubject<boolean>(false);
  booleanValue$ = this.booleanSubject.asObservable();
  update (value: boolean): void {
    this.booleanSubject.next(value);
  }
}