import { RhombusComponent } from './pages/materials/rhombus/rhombus.component';
import { ReportComponent } from './pages/report/report.component';
import { UnauthorizedComponent } from './pages/unauthorized/unauthorized/unauthorized.component';
import { PageNotFoundComponent } from './pages/pagenotfound/page-not-found/page-not-found.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { MaterialComponent } from './pages/materials/material/material.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './services/guards/admin.guard';
import { CaliberComponent } from './pages/materials/caliber/caliber.component';
import { HeightComponent } from './pages/materials/height/height.component';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'unauthorized',
    component: UnauthorizedComponent,
    pathMatch: 'full'
  },
  {
    path: 'signup',
    component: SignupComponent,
    pathMatch: 'full',
    canActivate:[AdminGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full'
  }, {
    path: 'admin',
    component: AdminDashboardComponent,
    pathMatch: 'full',
    canActivate:[AdminGuard]
  }, {
    path: 'dashboard',
    component: UserDashboardComponent,
    pathMatch: 'full'
  }, {
    path: 'materials',
    component: MaterialComponent,
    pathMatch: 'full',
    canActivate:[AdminGuard]
  },{
    path: 'calibers',
    component: CaliberComponent,
    pathMatch: 'full',
    canActivate:[AdminGuard]
  },{
    path: 'heights',
    component: HeightComponent,
    pathMatch: 'full',
    canActivate:[AdminGuard]
  },{
    path: 'rhombus',
    component: RhombusComponent,
    pathMatch: 'full',
    canActivate:[AdminGuard]
  }, {
    path: 'report',
    component: ReportComponent,
    pathMatch: 'full',
  }, {
    path: 'profile',
    component: ProfileComponent,
    pathMatch: 'full',
  },

  // 404
  {
    path: '**',
    pathMatch: 'full',
    component: PageNotFoundComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
