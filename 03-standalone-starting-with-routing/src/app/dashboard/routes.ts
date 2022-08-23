import { TodayComponent } from './today/today.component';
import { DashboardComponent } from './dashboard.component';
import { Route } from '@angular/router';

export const DASHBOARD_ROUTES: Route[] = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'today',
    component: TodayComponent,
  },
];
