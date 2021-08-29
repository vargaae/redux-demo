import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'todo-fetch',
  templateUrl: './todo-fetch.component.html',
  styleUrls: ['./todo-fetch.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoFetchComponent implements OnInit {
  @Input() todo: any;

  constructor() { }

  ngOnInit(): void {
  }

}
