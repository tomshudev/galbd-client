import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, timer } from 'rxjs';
import { Mission } from '../../models/mission.model';
import { ConfigService } from '../../service/config/config.service';
import { map, switchMap, tap, take } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { SelectMission } from '../../../core/actions/missins.actions';
import { getSelectedMission } from '../../reducers/missions.reducer';

@Injectable({
  providedIn: 'root',
})
export class MissionsService {
  constructor(
    private store: Store,
    private http: HttpClient,
    private configService: ConfigService,
    private _snackBar: MatSnackBar
  ) {}

  prevSolvedMissions: Mission[];

  selectMission(mission: Mission) {
    this.store.dispatch(SelectMission({ mission }));
  }

  getSelectedMission(): Observable<Mission> {
    return this.store.select(getSelectedMission);
  }

  connectPhoto(mission: Mission, uri: string) {
    return this.http
      .post(`${this.configService.config.apiUri}/missions/connectPhoto`, {
        id: mission.id,
        uri: uri,
      })
      .pipe(
        take(1),
        tap((data: { success: boolean; message: string }) => {
          if (!data.success) {
            this._snackBar.open('קרתה תקלה בזמן העלאת התמונה...', 'שוב!', {
              duration: 5000,
              horizontalPosition: 'center',
              verticalPosition: 'bottom',
            });
          }
        })
      );
  }

  updateMission(mission: Mission) {
    return this.http
      .post(`${this.configService.config.apiUri}/missions/update`, {
        mission,
      })
      .pipe(
        take(1),
        tap((data: { success: boolean; message: string }) => {
          if (!data.success) {
            this._snackBar.open('קרתה תקלה בזמן העלאת התמונה...', 'שוב!', {
              duration: 5000,
              horizontalPosition: 'center',
              verticalPosition: 'bottom',
            });
          }
        })
      );
  }

  sendMissionForAproval(mission: Mission) {
    this.http
      .post(
        `${this.configService.config.apiUri}/missions/sendMissionForAproval`,
        {
          id: mission.id,
        }
      )
      .pipe(
        take(1),
        tap((data: { success: boolean; message: string }) => {
          if (data.success) {
            this._snackBar.open('המשימה נשלחה לאישור מנהל!', 'יאייי!', {
              duration: 5000,
              horizontalPosition: 'center',
              verticalPosition: 'bottom',
            });
          } else {
            this._snackBar.open('קרתה תקלה בזמן הבדיקה...', 'שוב!', {
              duration: 5000,
              horizontalPosition: 'center',
              verticalPosition: 'bottom',
            });
          }
        })
      )
      .subscribe();
  }

  solveMission(mission: Mission) {
    this.http
      .post(`${this.configService.config.apiUri}/missions/missionSolved`, {
        id: mission.id,
      })
      .pipe(
        take(1),
        tap((data: { success: boolean; message: string }) => {
          if (data.success) {
            this._snackBar.open('פיצחת את המשימה!', 'יאייי!', {
              duration: 5000,
              horizontalPosition: 'center',
              verticalPosition: 'bottom',
            });
          } else {
            this._snackBar.open('קרתה תקלה בזמן הבדיקה...', 'שוב!', {
              duration: 5000,
              horizontalPosition: 'center',
              verticalPosition: 'bottom',
            });
          }
        })
      )
      .subscribe();
  }

  approveMission(missionID: string, isApproved: boolean) {
    this.http
      .post(`${this.configService.config.apiUri}/missions/approve`, {
        id: missionID,
        isApproved: isApproved,
      })
      .pipe(
        take(1),
        tap((data: { success: boolean; message: string }) => {
          if (data.success) {
            this._snackBar.open('המשימה אושרה!', 'יאייי!', {
              duration: 5000,
              horizontalPosition: 'center',
              verticalPosition: 'bottom',
            });
          } else {
            this._snackBar.open('קרתה תקלה בזמן האישור...', 'שוב!', {
              duration: 5000,
              horizontalPosition: 'center',
              verticalPosition: 'bottom',
            });
          }
        })
      )
      .subscribe();
  }

  getAllMissions(): Observable<Mission[]> {
    return timer(0, 1500).pipe(
      switchMap(() =>
        this.http.get(`${this.configService.config.apiUri}/missions`).pipe(
          map((data: { success: boolean; missions: Mission[] }) => {
            let missions = data.success
              ? this.addIndexToMissions(data.missions)
              : [];

            if (!data.success) {
              this._snackBar.open('קרתה תקלה בזמן שליפת המשימות', 'אוקיי', {
                duration: 3000,
                horizontalPosition: 'center',
                verticalPosition: 'bottom',
              });
            }

            return missions;
          })
        )
      )
    );
  }

  addIndexToMissions(missions: Mission[]): Mission[] {
    missions.forEach((mission, index) => {
      mission.index = index;
    });

    return missions;
  }

  checkSolvedMissions(): Observable<any> {
    return timer(0, 5000).pipe(
      switchMap(() =>
        this.http
          .get(`${this.configService.config.apiUri}/missions/solved`)
          .pipe(
            tap((data: { success: boolean; missions: Mission[] }) => {
              if (this.prevSolvedMissions === undefined) {
                this.prevSolvedMissions = data.missions;
              } else {
                let newSolvedMissions: Mission[] = data.missions.filter(
                  (mission) =>
                    this.prevSolvedMissions.findIndex(
                      (curr) => curr.id === mission.id
                    ) === -1
                );

                newSolvedMissions.forEach((mission) => {
                  if (mission.doesMissionNeedsApproval && mission.isApproved) {
                    this._snackBar.open(
                      `המשימה "${mission.name}" אושרה על ידי מנהל!`,
                      'יאייי',
                      {
                        duration: 10000,
                        horizontalPosition: 'center',
                        verticalPosition: 'bottom',
                      }
                    );
                  }
                });

                this.prevSolvedMissions = data.missions;
              }
            })
          )
      )
    );
  }

  getWaitingForApproval(): Observable<Mission[]> {
    return timer(0, 1500).pipe(
      switchMap(() =>
        this.http
          .get(
            `${this.configService.config.apiUri}/missions/waitingForApproval`
          )
          .pipe(
            map((data: { success: boolean; missions: Mission[] }) => {
              let missions = data.success
                ? this.addIndexToMissions(data.missions)
                : [];

              if (!data.success) {
                this._snackBar.open('קרתה תקלה בזמן שליפת המשימות', 'אוקיי', {
                  duration: 3000,
                  horizontalPosition: 'center',
                  verticalPosition: 'bottom',
                });
              }

              return missions;
            })
          )
      )
    );
  }

  getCurrProgress(): Observable<string> {
    return timer(0, 2000).pipe(
      switchMap(() =>
        this.http
          .get(`${this.configService.config.apiUri}/missions/currProgress`)
          .pipe(
            map((data: { success: boolean; currentProgress: string }) => {
              if (!data.success) {
                this._snackBar.open(
                  'קרתה תקלה בזמן שליפת דוח התקדמות',
                  'אוקיי',
                  {
                    duration: 3000,
                    horizontalPosition: 'center',
                    verticalPosition: 'bottom',
                  }
                );
              }

              return data.currentProgress
                ? data.currentProgress
                : '__.______,__.______';
            })
          )
      )
    );
  }
}
