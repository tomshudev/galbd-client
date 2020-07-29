import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
} from '@angular/core';

export type ImageRecognize = {
  id: string;
  url: string;
  isApproved: boolean;
  answer?: string;
};

@Component({
  selector: 'gal-recognize-mission',
  templateUrl: './recognize-mission.component.html',
  styleUrls: ['./recognize-mission.component.less'],
})
export class RecognizeMissionComponent implements OnInit, OnChanges {
  @Input() images: ImageRecognize[];
  @Input() isAdmin: boolean = false;
  @Input() isSolved: boolean = false;
  @Output() onAnswersChanged: EventEmitter<ImageRecognize[]> = new EventEmitter<
    ImageRecognize[]
  >();

  // imagesList: ImageRecognize[];

  constructor() {}

  ngOnInit(): void {
    // this.imagesList = [...this.images];
    this.images = this.images.map((image) => ({
      ...image,
      answer: image.answer ? image.answer : undefined,
    }));

    this.onAnswersChanged.emit(this.images);
  }

  ngOnChanges() {
    // this.imagesList = [...this.images];
    // this.onAnswersChanged.emit(this.imagesList);
  }

  answerChanged(id: string, value: string) {
    this.images.find((image) => image.id === id).answer = value;

    this.onAnswersChanged.emit(this.images);
  }
}
