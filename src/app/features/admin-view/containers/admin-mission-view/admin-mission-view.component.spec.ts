import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMissionViewComponent } from './admin-mission-view.component';

describe('AdminMissionViewComponent', () => {
  let component: AdminMissionViewComponent;
  let fixture: ComponentFixture<AdminMissionViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMissionViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMissionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
