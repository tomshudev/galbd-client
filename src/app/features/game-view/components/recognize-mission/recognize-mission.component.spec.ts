import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecognizeMissionComponent } from './recognize-mission.component';

describe('RecognizeMissionComponent', () => {
  let component: RecognizeMissionComponent;
  let fixture: ComponentFixture<RecognizeMissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecognizeMissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecognizeMissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
