import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoverComponent } from './cover/cover.component';
import { ProjectsComponent } from './projects/projects.component';
import { TechnologiesComponent } from './technologies/technologies.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CoverComponent,
    ProjectsComponent,
    TechnologiesComponent
  ],
  exports: [
    CoverComponent,
    ProjectsComponent,
    TechnologiesComponent
  ]
})
export class HomeModule { }
