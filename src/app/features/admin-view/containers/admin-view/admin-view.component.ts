import { Component, OnInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { Mission } from 'src/app/core/models/mission.model';
import { Store } from '@ngrx/store';
import { UsersService } from 'src/app/core/services/users/users.service';
import { MissionsService } from 'src/app/core/services/missions/missions.service';
import { HttpClient } from '@angular/common/http';
import { getLoggedUser } from 'src/app/core/reducers/users.reducer';
import { ToggleSidebar } from 'src/app/core/actions/layout.actions';
import { getIsSidebarOpen } from 'src/app/core/reducers/layout.reducer';

@Component({
  selector: 'gal-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.less'],
})
export class AdminViewComponent implements OnInit {
  subscriptions: Subscription[];
  missions: Mission[];
  selectedMission: Mission;
  currentProgress: string;
  isSidebarOpen$: Observable<boolean> = this.store.select(getIsSidebarOpen);

  constructor(
    private store: Store,
    public usersService: UsersService,
    public missionsService: MissionsService,
    private http: HttpClient
  ) {
    this.subscriptions = [
      this.missionsService.getWaitingForApproval().subscribe((missions) => {
        this.missions = missions;
      }),
      this.missionsService.getCurrProgress().subscribe((currentProgress) => {
        this.currentProgress = currentProgress;
      }),
      this.missionsService.getSelectedMission().subscribe((mission) => {
        console.log(mission);
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
