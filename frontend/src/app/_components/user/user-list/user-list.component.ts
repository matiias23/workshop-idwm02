import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';
import { User } from 'src/app/_models/user';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[];
  filteredUserList: User[] = [];

  constructor(
    private userService: UserService,
    private router: Router) {
      this.users=[];

      this.filteredUserList = this.users;
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
      this.filteredUserList = this.users;
    });
  }

  deleteUser(userId: number): void {
    this.userService.deleteUser(userId).subscribe(
      () => {
        console.log('Usuario eliminado con éxito');
        this.getUsers();
      },
      (error) => {
        console.error('Error al eliminar el usuario', error);
      }
    );
  }

  filterResults(event: Event) {
    const text = (event.target as HTMLInputElement).value;
    if (!text) {
      this.filteredUserList = this.users;
      return;
    }
  
    this.filteredUserList = this.users.filter(
      user => 
        user.rut.toLowerCase().includes(text) || 
        user.email.toLowerCase().includes(text) 
    );
  }

}
