import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminViewComponent } from './containers/admin-view/admin-view.component';
import { SharedModule } from '../../shared/shared.module';
import { GameViewModule } from '../game-view/game-view.module';
import { AdminMissionViewComponent } from './containers/admin-mission-view/admin-mission-view.component';

@NgModule({
  declarations: [AdminViewComponent, AdminMissionViewComponent],
  imports: [CommonModule, GameViewModule, SharedModule],
})
export class AdminViewModule {}
