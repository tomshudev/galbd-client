import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';
import { AppComponent } from './core/containers/app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { usersReducer } from './core/reducers/users.reducer';

@NgModule({
  imports: [
    BrowserModule,
    CoreModule,
    BrowserAnimationsModule,

    StoreDevtoolsModule.instrument({ maxAge: 100 }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
