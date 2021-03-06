import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { SharedModule } from '../../shared/shared.module';

import { GraphTooltipComponent } from './components/graph-tooltip/graph-tooltip.component';
import { HeaderComponent } from './components/header/header.component';
import { TimeDateGraphComponent } from './components/time-date-graph/time-date-graph.component';
import { TimeGameGraphComponent } from './components/time-game-graph/time-game-graph.component';
import {
    TimePlatformGraphComponent
} from './components/time-platform-graph/time-platform-graph.component';
import { DashboardComponent } from './dashboard.component';

import { reducers } from './reducers/root.reducer';

@NgModule({
  imports: [
    CommonModule,
    NgxChartsModule,
    SharedModule,
    StoreModule.forFeature('dashboard', reducers),
  ],
  declarations: [
    DashboardComponent,
    TimeDateGraphComponent,
    TimeGameGraphComponent,
    TimePlatformGraphComponent,
    GraphTooltipComponent,
    HeaderComponent
  ]
})
export class DashboardModule { }
