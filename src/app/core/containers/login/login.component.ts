import { Component, OnDestroy, OnInit } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  tap,
} from 'rxjs/operators';
import { UsersService } from '../../services/users/users.service';

@Component({
  selector: 'gal-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
})
export class LoginComponent implements OnInit, OnDestroy {
  constructor(private usersService: UsersService) {}

  enterPrssed$ = fromEvent(document, 'keyup').pipe(
    debounceTime(150),
    filter((e: KeyboardEvent) => e.keyCode === 13),
    distinctUntilChanged(),
    tap(() => this.signIn())
  );

  username: string;
  password: string;
  subscriptions: Subscription[];

  ngOnInit(): void {
    this.subscriptions = [this.enterPrssed$.subscribe()];
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  signIn() {
    this.usersService.login(this.username, this.password);
  }
}
