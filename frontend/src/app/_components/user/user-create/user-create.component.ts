import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';
import {AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit{
  createForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService,) {
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.createForm = this.fb.group({
      rut: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(255)
      ]],
      name: ['',[
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(255)
      ]],
      lastName: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(255)
      ]],
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      points: ['', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(255)
      ]]
    })
  }

  createUser(): void {
    const values = {...this.createForm.value};

    this.userService.createUser(values).subscribe({
      next: () => {
        this.router.navigateByUrl('/users/list').then(() =>
        console.log("creado con exito")
        );
      },
      error: error => {
        console.log("error");
        }
    });
  }

}
