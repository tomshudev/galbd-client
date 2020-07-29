import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionStatusCheckboxComponent } from './mission-status-checkbox.component';

describe('MissionStatusCheckboxComponent', () => {
  let component: MissionStatusCheckboxComponent;
  let fixture: ComponentFixture<MissionStatusCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissionStatusCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionStatusCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
