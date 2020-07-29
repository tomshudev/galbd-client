import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordMissionComponent } from './password-mission.component';

describe('PasswordMissionComponent', () => {
  let component: PasswordMissionComponent;
  let fixture: ComponentFixture<PasswordMissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordMissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordMissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
