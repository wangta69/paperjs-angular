import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Sample1Component } from './samples/sample1/component';
import { Sample2Component } from './samples/sample2/component';
import { Sample3Component } from './samples/sample3/component';
import { Sample4Component } from './samples/sample4/component';
import { Sample5Component } from './samples/sample5/component';
import { Sample6Component } from './samples/sample6/component';
import { Sample7Component } from './samples/sample7/component';
import { Sample8Component } from './samples/sample8/component';

const routes: Routes = [
    { path: 'samples/sample1', component: Sample1Component },
    { path: 'samples/sample2', component: Sample2Component },
    { path: 'samples/sample3', component: Sample3Component },
    { path: 'samples/sample4', component: Sample4Component },
    { path: 'samples/sample5', component: Sample5Component },
    { path: 'samples/sample6', component: Sample6Component },
    { path: 'samples/sample7', component: Sample7Component },
    { path: 'samples/sample8', component: Sample8Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
