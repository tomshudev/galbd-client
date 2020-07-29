import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ProfilePictureComponent } from './components/profile-picture/profile-picture.component';
import { MissionsListComponent } from './components/missions-list/missions-list.component';
import { MissionStatusCheckboxComponent } from './components/mission-status-checkbox/mission-status-checkbox.component';
import { MissionExplanationComponent } from './components/mission-explanation/mission-explanation.component';
import { MissionHeadlineComponent } from './components/mission-headline/mission-headline.component';
import { InputComponent } from './components/input/input.component';
import { ButtonComponent } from './components/button/button.component';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [
    SidebarComponent,
    ProfilePictureComponent,
    MissionsListComponent,
    MissionStatusCheckboxComponent,
    MissionExplanationComponent,
    MissionHeadlineComponent,
    InputComponent,
    ButtonComponent,
  ],
  imports: [CommonModule, MatTooltipModule],
  exports: [
    SidebarComponent,
    MissionHeadlineComponent,
    ButtonComponent,
    InputComponent,
  ],
})
export class SharedModule {}
