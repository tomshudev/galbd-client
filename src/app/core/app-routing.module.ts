import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './containers/main/main.component';
import { GameViewComponent } from '../features/game-view/containers/game-view/game-view.component';
import { AdminViewComponent } from '../features/admin-view/containers/admin-view/admin-view.component';
import { LoginComponent } from './containers/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { CongratulationsComponent } from '../features/game-view/containers/congratulations/congratulations.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'game',
    component: GameViewComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'congratulations',
    component: CongratulationsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'admin',
    component: AdminViewComponent,
  },
  {
    path: '**',
    redirectTo: '/game',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
