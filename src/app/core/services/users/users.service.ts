import { Injectable } from '@angular/core';
import { User } from '../../models/user.model';
import { Store } from '@ngrx/store';
import { Login, Logout } from '../../actions/users.actions';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private users: User[] = [
    {
      username: 'tomshu',
      password: '8192426Ab',
      isAdmin: true,
      name: 'תום שושן',
      profilePictureLink:
        'https://scontent.fsdv2-1.fna.fbcdn.net/v/t1.0-9/60280485_10214055624890913_3803865333622636544_o.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_ohc=AKlMT3lSPIYAX_jn1Bt&_nc_ht=scontent.fsdv2-1.fna&oh=3e1fdf6dc478e63fb5ac36ed8ed7a3b8&oe=5F3C6E2D',
    },
    {
      username: 'galbd',
      password: 'gabay981998',
      isAdmin: false,
      name: 'גל גבאי',
      profilePictureLink:
        'https://scontent.fsdv2-1.fna.fbcdn.net/v/t1.0-9/69441026_2809996042346942_3664862449414176768_o.jpg?_nc_cat=111&_nc_sid=09cbfe&_nc_ohc=0veCHhpHqQ4AX-7Qczj&_nc_ht=scontent.fsdv2-1.fna&oh=7200bb5cdacf089b70e6bf977fc2c180&oe=5F3F79D5',
    },
  ];

  constructor(private store: Store, private _snackBar: MatSnackBar) {}

  login(username: string, password: string) {
    let message: string;
    let user: User = this.users.find((user) => user.username === username);

    if (!user) {
      message = 'משהו לא נכון :(';
    } else if (user.password === password) {
      if (user.isAdmin) {
        message = 'התחברת בתור מנהל';
      } else {
        message = 'ברוכה הבאה גל!';
      }

      this.store.dispatch(Login({ user }));
    }

    this._snackBar.open(message, 'אוקיי', {
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }

  logout() {
    this.store.dispatch(Logout());
  }
}
