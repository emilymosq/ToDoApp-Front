import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{

  constructor( private router: Router,
               private formBuilder: FormBuilder,
               private userService: UserService
  ) {}

  loginForm!: FormGroup;

  ngOnInit():void{
    this._createForm();
  }

  login(){
    if(this.loginForm?.valid){
      console.log("Servicio de login");
      this.userService.setUser();
      this.router.navigateByUrl('/app/inicio');
      this.loginForm.reset();
    }
    else{
      alert("error al ingresar los datos")
    }
  }

  private _createForm() {
    this.loginForm = this.formBuilder.group({
      user:['emily',  [Validators.required]],
      email: ['emily@gmail.com', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }
}