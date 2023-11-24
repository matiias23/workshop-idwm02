import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject,map,Observable } from 'rxjs';
import { Account } from '../_models/account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private apiUrl = 'http://localhost:5023/api';
  private currentAccountSource = new BehaviorSubject<Account | null>(null);
  currentAccount$ = this.currentAccountSource.asObservable();

  constructor(private http: HttpClient) { }

  login(model: any): Observable<void> {
    return this.http.post<Account>(`${this.apiUrl}/users/login`, model).pipe(
      map((response: Account) => {
        const account = response;
        //console.log(account);
        //console.log(account.token);
        if (account && account.token) {
          this.setCurrentToken(account);
        }
      })
    );
  }

  private setCurrentToken(account: Account): void {
    localStorage.setItem('token', account.token);
    this.currentAccountSource.next(account);
  }

  logout(): void {
    localStorage.removeItem('token');
    this.currentAccountSource.next(null);
  }



  

}
