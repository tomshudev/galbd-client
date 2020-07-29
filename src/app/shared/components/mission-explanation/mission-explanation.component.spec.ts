import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionExplanationComponent } from './mission-explanation.component';

describe('MissionExplanationComponent', () => {
  let component: MissionExplanationComponent;
  let fixture: ComponentFixture<MissionExplanationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissionExplanationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionExplanationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
