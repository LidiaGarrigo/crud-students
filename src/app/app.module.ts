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

import { HttpClientTestingModule } from '@angular/common/http/testing';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    MainCardComponent,
    NewStudentComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularMaterialModule,
    FormsModule,
    HttpClientTestingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
