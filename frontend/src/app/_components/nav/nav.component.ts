import { Component } from '@angular/core';
import { AccountService } from 'src/app/_services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  constructor(public accountService: AccountService, private router: Router){
  }

  logout(): void {
    this.router.navigateByUrl('/login').then(() => this.accountService.logout());
  }

}
