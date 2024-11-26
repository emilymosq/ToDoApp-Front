import {Component, OnInit} from '@angular/core';
import {LoginComponent} from "../login/login.component";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent{
  userData: any;

  constructor(private userService: UserService) {}


}
