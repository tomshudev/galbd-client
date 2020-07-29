import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Mission } from 'src/app/core/models/mission.model';

@Component({
  selector: 'gal-missions-list',
  templateUrl: './missions-list.component.html',
  styleUrls: ['./missions-list.component.less'],
})
export class MissionsListComponent implements OnInit {
  @Input() missions: Mission[];
  @Input() selectedMission: Mission;
  @Output() onMissionSelected: EventEmitter<Mission> = new EventEmitter<
    Mission
  >();

  constructor() {}

  ngOnInit(): void {}
}
