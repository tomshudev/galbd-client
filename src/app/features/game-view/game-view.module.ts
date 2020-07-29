import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameViewComponent } from './containers/game-view/game-view.component';
import { SharedModule } from '../../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { PasswordMissionComponent } from './components/password-mission/password-mission.component';
import { MissionViewComponent } from './containers/mission-view/mission-view.component';
import { UploadImageMissionComponent } from './components/upload-image-mission/upload-image-mission.component';
import { OrderMissionComponent } from './components/order-mission/order-mission.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { QuizMissionComponent } from './components/quiz-mission/quiz-mission.component';
import { MatRadioModule } from '@angular/material/radio';
import { RecognizeMissionComponent } from './components/recognize-mission/recognize-mission.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CongratulationsComponent } from './containers/congratulations/congratulations.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    GameViewComponent,
    PasswordMissionComponent,
    MissionViewComponent,
    UploadImageMissionComponent,
    OrderMissionComponent,
    QuizMissionComponent,
    RecognizeMissionComponent,
    CongratulationsComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    SharedModule,
    DragDropModule,
    MatRadioModule,
    MatTooltipModule,
  ],
  exports: [
    GameViewComponent,
    CongratulationsComponent,
    PasswordMissionComponent,
    MissionViewComponent,
    UploadImageMissionComponent,
    OrderMissionComponent,
    QuizMissionComponent,
    RecognizeMissionComponent,
  ],
})
export class GameViewModule {}
