import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { UserService } from '../../../auth/services/user.service';

import { RouteEntry } from '../../models';

@Component({
  selector: 'app-tracker-app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavComponent implements OnInit {

  @Input() bannerRoute: RouteEntry;
  @Input() routes: RouteEntry[] = [];
  @Input() userName = '';
  constructor(private userService: UserService) { }

  ngOnInit() { }

  logout() {
    this.userService.logout();
  }
}
