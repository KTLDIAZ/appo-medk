import { Component } from '@angular/core';
import { User } from '../interfaces/user.interfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [],
})
export class LoginComponent {
  public user: User = { email: '', password: '' };

  login() {
    console.log(this.user);
  }
}
