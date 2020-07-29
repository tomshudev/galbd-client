import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gal-mission-explanation',
  templateUrl: './mission-explanation.component.html',
  styleUrls: ['./mission-explanation.component.less'],
})
export class MissionExplanationComponent implements OnInit {
  @Input() explanation: string;

  constructor() {}

  ngOnInit(): void {}
}
