import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
} from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';

export type QuizQuestion = {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
  answer?: string;
};

@Component({
  selector: 'gal-quiz-mission',
  templateUrl: './quiz-mission.component.html',
  styleUrls: ['./quiz-mission.component.less'],
})
export class QuizMissionComponent implements OnInit, OnChanges {
  @Input() questions: QuizQuestion[];
  @Input() isSolved: boolean;
  @Output() onQuizAnswersChanged: EventEmitter<
    QuizQuestion[]
  > = new EventEmitter<QuizQuestion[]>();

  constructor() {}

  ngOnInit(): void {
    this.questions = this.questions.map((question) => ({
      ...question,
      answer: undefined,
    }));

    this.onQuizAnswersChanged.emit(this.questions);
  }

  ngOnChanges() {
    this.questions = this.questions.map((question) => ({
      ...question,
      answer: undefined,
    }));

    this.onQuizAnswersChanged.emit(this.questions);
  }

  answerChanged(id: string, change: MatRadioChange) {
    this.questions.find((question) => question.id === id).answer = change.value;

    this.onQuizAnswersChanged.emit(this.questions);
  }
}
