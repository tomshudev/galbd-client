import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadImageMissionComponent } from './upload-image-mission.component';

describe('UploadImageMissionComponent', () => {
  let component: UploadImageMissionComponent;
  let fixture: ComponentFixture<UploadImageMissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadImageMissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadImageMissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
