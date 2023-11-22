import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user';
import { UserService } from 'src/app/_services/user.service';
import {ActivatedRoute, Router} from "@angular/router";
import {AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators} from "@angular/forms";


@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit{
  user: User | undefined;
  updateForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService) {
  }

  ngOnInit(): void {
    this.loadClient();
  }

  loadClient(): void {
    const idStr = this.route.snapshot.paramMap.get('id');
    if (!idStr) return;

    let id = parseInt(idStr);
    if (isNaN(id)) return;

    this.userService.getUserById(id).subscribe({
      next: client => {
        this.user = client;
        this.initializeForm();
      }
    });
  }

  initializeForm(): void {
    if (!this.user) return;

    this.updateForm = this.fb.group({
      rut: [this.user.rut, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(255)
      ]],
      name: [this.user.name, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(255)
      ]],
      lastName: [this.user.lastName, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(255)
      ]],
      email: [this.user.email, [
        Validators.required,
        Validators.email
      ]],
      points: [this.user.points, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(255)
      ]]
    })
  }

  updateClient(): void {
    if (!this.user) return;

    const values = {...this.updateForm.value};
    console.log(values);
    console.log(this.user.id);

    this.userService.updateUser(values, this.user.id).subscribe({
      next: () => {
        this.router.navigateByUrl('/users/list').then(() => {
          console.log("creado con exito")
        });
      },
      error: error => {
        console.log("error");
      }
    });
  }

}
