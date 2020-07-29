import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionHeadlineComponent } from './mission-headline.component';

describe('MissionHeadlineComponent', () => {
  let component: MissionHeadlineComponent;
  let fixture: ComponentFixture<MissionHeadlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissionHeadlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionHeadlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
