import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'gal-password-mission',
  templateUrl: './password-mission.component.html',
  styleUrls: ['./password-mission.component.less'],
})
export class PasswordMissionComponent implements OnInit {
  @Output() onPasswordChanges: EventEmitter<string> = new EventEmitter<
    string
  >();
  @Input() correctAnswer: string;
  @Input() isSolved: boolean;

  constructor() {}

  ngOnInit(): void {}
}
