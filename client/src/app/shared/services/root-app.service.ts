import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppAction } from '../../store/app/app.action';
import { selectAppTitle, selectAppMessage } from '../../store/app/app.selector';


@Injectable({
  providedIn: 'root'
})
export class RootAppService {

  constructor( private store: Store ) { }

  setCurrentAppTitle(title: string): void {
    this.store.dispatch( AppAction.setCurrentAppTitle({title}) );
  }
  getCurrentAppTitle(): Observable<string> {
    return this.store.select(selectAppTitle)
  }

  setAppMessage(message: string): void {
    this.store.dispatch(AppAction.setStatusMessage({message}));
  }
  getAppMessage(): Observable<string> {
    return this.store.select(selectAppMessage);
  }
}
