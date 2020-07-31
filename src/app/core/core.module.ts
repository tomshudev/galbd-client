import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './containers/app/app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { GameViewModule } from '../features/game-view/game-view.module';
import { AdminViewModule } from '../features/admin-view/admin-view.module';
import { MainComponent } from './containers/main/main.component';
import { LoginComponent } from './containers/login/login.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { StoreModule } from '@ngrx/store';
import { usersReducer } from './reducers/users.reducer';
import { missionsReducer } from './reducers/missions.reducer';
import { layoutReducer } from './reducers/layout.reducer';

@NgModule({
  declarations: [AppComponent, MainComponent, LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
    SharedModule,
    AdminViewModule,
    GameViewModule,
    AppRoutingModule,
    StoreModule.forRoot({
      users: usersReducer,
      missions: missionsReducer,
      layout: layoutReducer,
    }),
  ],
  exports: [AppComponent],
})
export class CoreModule {}
