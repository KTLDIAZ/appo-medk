import { Component } from '@angular/core';
import { User } from '../interfaces/user.interfaces';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [],
})
export class RegisterComponent {
  public user: User = { email: '', password: '' };

  register() {
    console.log(this.user);
  }
}
