import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { User } from '../../models/user.model';
import { getLoggedUser } from '../../reducers/users.reducer';
import { MissionsService } from '../../services/missions/missions.service';

@Component({
  selector: 'gal-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less'],
})
export class MainComponent implements OnInit {
  subscriptions: Subscription[];

  constructor(
    private store: Store,
    private router: Router,
    private missionsService: MissionsService
  ) {
    this.subscriptions = [
      this.store.select(getLoggedUser).subscribe((loggedUser: User) => {
        if (!loggedUser) {
          this.router.navigateByUrl('/login');
        } else if (loggedUser.isAdmin) {
          this.router.navigateByUrl('/admin');
        } else {
          this.router.navigateByUrl('/game');
        }
      }),
      missionsService.checkSolvedMissions().subscribe(),
    ];
  }

  ngOnInit(): void {}
}
