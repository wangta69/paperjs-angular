import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Sample1Component } from './samples/sample1/component';
import { Sample2Component } from './samples/sample2/component';
import { Sample3Component } from './samples/sample3/component';
import { Sample4Component } from './samples/sample4/component';
import { Sample5Component } from './samples/sample5/component';
import { Sample6Component } from './samples/sample6/component';
import { Sample7Component } from './samples/sample7/component';
import { Sample8Component } from './samples/sample8/component';
import { Sample9Component } from './samples/sample9/component';

@NgModule({
  declarations: [
    AppComponent,
    Sample1Component,
    Sample2Component,
    Sample3Component,
    Sample4Component,
    Sample5Component,
    Sample6Component,
    Sample7Component,
    Sample8Component,
    Sample9Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
