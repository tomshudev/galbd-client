import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Mission, MissionTypes } from 'src/app/core/models/mission.model';
import { MissionsService } from 'src/app/core/services/missions/missions.service';
import { Store } from '@ngrx/store';
import { SelectMission } from 'src/app/core/actions/missins.actions';

@Component({
  selector: 'gal-admin-mission-view',
  templateUrl: './admin-mission-view.component.html',
  styleUrls: ['./admin-mission-view.component.less'],
})
export class AdminMissionViewComponent implements OnInit {
  @Input() selectedMission: Mission;
  @Input() missionsCount: number;

  @Output() onSelectedMissionChanged: EventEmitter<number> = new EventEmitter<
    number
  >();

  missionTypes;

  currentValue: any;

  constructor(private missionsService: MissionsService, private store: Store) {
    this.missionTypes = MissionTypes;
  }

  ngOnInit(): void {}

  approveMission(isApproved: boolean) {
    this.missionsService.approveMission(this.selectedMission.id, isApproved);
    this.store.dispatch(SelectMission({ mission: undefined }));
  }

  denyMission() {}
}
