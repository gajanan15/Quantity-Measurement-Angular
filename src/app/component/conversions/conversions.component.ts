import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-conversions',
  templateUrl: './conversions.component.html',
  styleUrls: ['./conversions.component.scss'],
})
export class ConversionsComponent implements OnInit {
  constructor() {}

  @Input() subUnit: any[];
  @Input() inputOne: number;
  @Input() inputTwo: number;

  ngOnInit(): void {}
}
