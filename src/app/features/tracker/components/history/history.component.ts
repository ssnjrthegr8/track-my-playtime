import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { HistoryGrouping } from '../../models';

@Component({
  selector: 'app-tracker-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HistoryComponent implements OnInit {

  @Input() items: HistoryGrouping[] = [];
  @Input() platformsOptions: string[] = [];
  @Input() loading = false;
  constructor() { }

  ngOnInit() { }
}
