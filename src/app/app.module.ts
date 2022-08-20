import { AnimationsComponent } from './components/animations/animations.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainCardComponent } from './components/main-card/main-card.component';
import { NewStudentComponent } from './components/main-card/new-student/new-student.component';
import { StudentComponent } from './components/main-card/student/student.component';

import { HttpClientModule } from '@angular/common/http';
import { AngularMaterialModule } from './modules/angular-material/angular-material.module';
import { FormsModule } from '@angular/forms';

import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { CommonModule } from '@angular/common';

export function playerFactory(): any {
  return import('lottie-web');
}

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    MainCardComponent,
    NewStudentComponent,
    StudentComponent,
    AnimationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    AngularMaterialModule,
    FormsModule,
    LottieModule.forRoot({ player: playerFactory })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
