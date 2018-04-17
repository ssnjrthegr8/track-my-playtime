import { Component, OnInit } from '@angular/core';

import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faChartBar, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

import { UserService } from '../../features/auth/services/user.service';

import { User } from '../../features/auth/models';
import { RouteEntry } from '../../models';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {

  bannerRoute: RouteEntry = {
    caption: 'Track My Playtime',
    router: ['app/tracker'],
    trackingCategory: 'navBanner'
  };

  routes: RouteEntry[] = [
    {
      caption: 'Tracker',
      router: ['app/tracker'],
      exact: true,
      icon: faClock,
      trackingCategory: 'navTracker'
    },
    {
      caption: 'Dashboard',
      router: ['app/dashboard'],
      exact: true,
      icon: faChartBar,
      trackingCategory: 'navDashboard'
    }
  ];
  user: User;
  icons = {
    logout: faSignOutAlt
  };
  constructor(private userService: UserService) {
    this.user = this.userService.getUser();
  }

  ngOnInit() { }

  logout() {
    this.userService.logout();
  }
}