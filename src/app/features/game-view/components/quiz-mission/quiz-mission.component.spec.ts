import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizMissionComponent } from './quiz-mission.component';

describe('QuizMissionComponent', () => {
  let component: QuizMissionComponent;
  let fixture: ComponentFixture<QuizMissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizMissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizMissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
