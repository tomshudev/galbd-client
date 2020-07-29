import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gal-mission-status-checkbox',
  templateUrl: './mission-status-checkbox.component.html',
  styleUrls: ['./mission-status-checkbox.component.less'],
})
export class MissionStatusCheckboxComponent implements OnInit {
  @Input() isSolved: boolean;
  @Input() isWaitingForApproval: boolean;
  @Input() isApproved: boolean;
  @Input() missionID: string;

  constructor() {}

  ngOnInit(): void {}
}
