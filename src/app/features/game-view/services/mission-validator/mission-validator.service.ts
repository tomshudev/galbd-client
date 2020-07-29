import { Injectable } from '@angular/core';
import { Mission, MissionTypes } from 'src/app/core/models/mission.model';
import { MissionsService } from 'src/app/core/services/missions/missions.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ListItem } from '../../components/order-mission/order-mission.component';
import { QuizQuestion } from '../../components/quiz-mission/quiz-mission.component';

@Injectable({
  providedIn: 'root',
})
export class MissionValidatorService {
  constructor(
    private missionsService: MissionsService,
    private _snackBar: MatSnackBar
  ) {}

  validateMission(mission: Mission, value: any) {
    let isSolved: boolean = false;

    switch (mission.type) {
      case MissionTypes.PASSWORD: {
        isSolved = mission.data.validPassword === value;

        break;
      }
      case MissionTypes.ORDER: {
        isSolved = true;

        (value as ListItem[]).forEach((item, index) => {
          if (item.id !== mission.data.correctOrder[index]) {
            isSolved = false;
          }
        });

        break;
      }
      case MissionTypes.QUIZ: {
        isSolved = true;

        (value as QuizQuestion[]).forEach((item) => {
          if (
            !item.answer ||
            item.correctAnswer.trim() !== item.answer.trim()
          ) {
            isSolved = false;
          }
        });
      }
    }

    if (mission.doesMissionNeedsApproval) {
      switch (mission.type) {
        case MissionTypes.PHOTO: {
          this.missionsService
            .connectPhoto(mission, value)
            .subscribe((data: { success: boolean; message: string }) => {
              if (data.success) {
                this.missionsService.sendMissionForAproval(mission);
              }
            });

          break;
        }
        case MissionTypes.RECOGNIZE: {
          let newMission = {
            ...mission,
            data: {
              images: value,
            },
          };

          this.missionsService
            .updateMission(newMission)
            .subscribe((data: { success: boolean; message: string }) => {
              if (data.success) {
                this.missionsService.sendMissionForAproval(mission);
              }
            });
        }
      }
    } else if (isSolved) {
      this.missionsService.solveMission(mission);
    } else {
      this._snackBar.open('הפתרון לא נכון...', 'שוב!', {
        duration: 5000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
    }
  }
}
