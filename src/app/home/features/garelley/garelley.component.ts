import { ChangeDetectionStrategy, Component, input, OnInit, output } from '@angular/core';
import { GaralleyItem, GaralleyList } from '../../data-access/model';
import {
  IonCard,
  IonCardSubtitle,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
} from '@ionic/angular/standalone';

@Component({
  selector: 'mcl-garelley',
  templateUrl: './garelley.component.html',
  styleUrls: ['./garelley.component.scss'],
  imports: [
    IonCardHeader,
    IonCardSubtitle,
    IonCard,
    IonCardTitle,
    IonCardContent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GarelleyComponent implements OnInit {
  items = input.required<GaralleyList>();

  onDetail = output<GaralleyItem>();

  constructor() {}

  ngOnInit() {}
}
