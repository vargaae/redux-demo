import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'todo-toggle',
  templateUrl: './todo-toggle.component.html',
  styleUrls: ['./todo-toggle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoToggleComponent implements OnInit {
  @Input() open: boolean;
  @Output() toggleAccordion = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  emitToggleAccordion() {
    this.toggleAccordion.emit();
  }
}
