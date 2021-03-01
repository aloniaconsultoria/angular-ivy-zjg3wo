
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageComponent } from './manager/manager.component';
const routes: Routes = [
{
path: '',
component: DashboardComponent
},
{
path: 'manage',
component: ManageComponent
}
];
export const AppRoutes = RouterModule.forRoot(routes);