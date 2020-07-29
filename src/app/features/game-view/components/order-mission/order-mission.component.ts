import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
} from '@angular/core';
import { moveItemInArray, CdkDragDrop } from '@angular/cdk/drag-drop';

export type ListItem = {
  id: string;
  name: string;
  pictureLink?: string;
};

@Component({
  selector: 'gal-order-mission',
  templateUrl: './order-mission.component.html',
  styleUrls: ['./order-mission.component.less'],
})
export class OrderMissionComponent implements OnInit, OnChanges {
  @Input() items: ListItem[];
  @Input() isSolved: boolean;
  @Output() onOrderChanged: EventEmitter<ListItem[]> = new EventEmitter<
    ListItem[]
  >();

  listItems: ListItem[];

  constructor() {}

  ngOnInit(): void {
    this.listItems = [...this.items];
    this.onOrderChanged.emit(this.listItems);
  }

  ngOnChanges() {
    this.listItems = [...this.items];
    this.onOrderChanged.emit(this.listItems);
  }

  drop(event: CdkDragDrop<ListItem[]>) {
    moveItemInArray(this.listItems, event.previousIndex, event.currentIndex);

    this.onOrderChanged.emit(this.listItems);
  }
}
