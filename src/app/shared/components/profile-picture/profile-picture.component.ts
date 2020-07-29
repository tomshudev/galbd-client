import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gal-profile-picture',
  templateUrl: './profile-picture.component.html',
  styleUrls: ['./profile-picture.component.less'],
})
export class ProfilePictureComponent implements OnInit {
  @Input() image: string;

  constructor() {}

  ngOnInit(): void {}
}
