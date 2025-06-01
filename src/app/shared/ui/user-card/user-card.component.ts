import { Component, input, OnInit } from '@angular/core';

@Component({
  selector: 'mcl-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent implements OnInit {
  userName = input<string>('userName');
  constructor() {}

  ngOnInit() {}
}
