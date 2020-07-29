import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MissionTypes, Mission } from 'src/app/core/models/mission.model';
import { MissionValidatorService } from '../../services/mission-validator/mission-validator.service';

@Component({
  selector: 'gal-mission-view',
  templateUrl: './mission-view.component.html',
  styleUrls: ['./mission-view.component.less'],
})
export class MissionViewComponent implements OnInit {
  @Input() selectedMission: Mission;
  @Input() missionsCount: number;

  @Output() onSelectedMissionChanged: EventEmitter<number> = new EventEmitter<
    number
  >();

  missionTypes;

  currentValue: any;

  constructor(private missionValidatorService: MissionValidatorService) {
    this.missionTypes = MissionTypes;
  }

  ngOnInit(): void {}

  missionWasUpdated(value: any) {
    this.currentValue = value;
  }

  validateMission() {
    this.missionValidatorService.validateMission(
      this.selectedMission,
      this.currentValue
    );
  }
}
