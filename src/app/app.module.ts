import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VoterformComponent } from './voterform/voterform.component';
import { MaterialdesignModule } from './materialdesign/materialdesign.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ResultComponent } from './result/result.component';

@NgModule({
  declarations: [
    AppComponent,
    VoterformComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, MaterialdesignModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
