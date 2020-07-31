import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { throwError, Subscription, Observable } from 'rxjs';
import { catchError, take } from 'rxjs/operators';
import { getLoggedUser } from 'src/app/core/reducers/users.reducer';
import { UsersService } from 'src/app/core/services/users/users.service';
import { MissionsService } from '../../../../core/services/missions/missions.service';
import { Mission, MissionTypes } from 'src/app/core/models/mission.model';
import { Router } from '@angular/router';
import { ToggleSidebar } from 'src/app/core/actions/layout.actions';
import { getIsSidebarOpen } from 'src/app/core/reducers/layout.reducer';

@Component({
  selector: 'gal-game-view',
  templateUrl: './game-view.component.html',
  styleUrls: ['./game-view.component.less'],
})
export class GameViewComponent implements OnInit {
  subscriptions: Subscription[];
  missions: Mission[];
  selectedMission: Mission;
  currentProgress: string;
  isSidebarOpen$: Observable<boolean> = this.store.select(getIsSidebarOpen);

  constructor(
    private store: Store,
    public usersService: UsersService,
    public missionsService: MissionsService,
    private router: Router
  ) {
    this.subscriptions = [
      this.missionsService.getAllMissions().subscribe((missions) => {
        this.missions = missions;
      }),
      this.missionsService.getCurrProgress().subscribe((currentProgress) => {
        this.currentProgress = currentProgress;

        if (!currentProgress.includes('_')) {
          console.log('Game has finished!');
          this.router.navigateByUrl('/congratulations');
        }
      }),
      this.missionsService.getSelectedMission().subscribe((mission) => {
        this.selectedMission = mission;
      }),
    ];
  }

  ngOnInit(): void {}

  user$ = this.store.select(getLoggedUser);

  missionSelected(mission: Mission) {
    this.missionsService.selectMission(mission);
    this.toggleSidebar();
  }

  toggleSidebar() {
    this.store.dispatch(ToggleSidebar());
  }
}
