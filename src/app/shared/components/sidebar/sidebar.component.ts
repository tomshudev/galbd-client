import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../../core/models/user.model';
import { Mission } from 'src/app/core/models/mission.model';

@Component({
  selector: 'gal-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.less'],
})
export class SidebarComponent implements OnInit {
  @Input() user: User;
  @Input() missions: Mission[];
  @Input() selectedMission: Mission;
  @Input() isAdmin: boolean;
  @Input() currentProgress: string;
  @Output() logout: EventEmitter<void> = new EventEmitter<void>();
  @Output() onMissionSelected: EventEmitter<Mission> = new EventEmitter<
    Mission
  >();

  constructor() {}

  ngOnInit(): void {}
}
