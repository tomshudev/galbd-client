import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Mission } from 'src/app/core/models/mission.model';

export enum MissionStatus {
  APPROVED,
  DENIED,
  WAITING,
}

@Component({
  selector: 'gal-mission-headline',
  templateUrl: './mission-headline.component.html',
  styleUrls: ['./mission-headline.component.less'],
})
export class MissionHeadlineComponent implements OnInit, OnChanges {
  @Input() mission: Mission;
  @Input() isAdmin: boolean;

  status: MissionStatus;
  missionStatus;

  constructor() {
    this.missionStatus = MissionStatus;
  }

  ngOnInit(): void {
    if (!this.isAdmin && this.mission.doesMissionNeedsApproval) {
      this.status = this.mission.isWaitingForApproval
        ? MissionStatus.WAITING
        : this.mission.isSolved !== undefined
        ? MissionStatus.APPROVED
        : MissionStatus.DENIED;
    }
  }

  ngOnChanges() {
    if (
      !this.isAdmin &&
      this.mission.doesMissionNeedsApproval &&
      this.mission.isWaitingForApproval !== undefined
    ) {
      this.status = this.mission.isWaitingForApproval
        ? MissionStatus.WAITING
        : this.mission.isSolved === undefined || !this.mission.isSolved
        ? MissionStatus.DENIED
        : MissionStatus.APPROVED;
    }
  }
}
