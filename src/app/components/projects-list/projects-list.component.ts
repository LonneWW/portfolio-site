import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../interfaces/project';
import { ProjectComponent } from '../utilities/project/project.component';
import { TranslateService, TranslatePipe } from '@ngx-translate/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogViewProjectComponent } from '../utilities/dialog-view-project/dialog-view-project.component';

@Component({
  selector: 'app-projects-list',
  imports: [CommonModule, ProjectComponent, TranslatePipe],
  templateUrl: './projects-list.component.html',
  styleUrl: './projects-list.component.scss',
})
export class ProjectsListComponent implements OnInit {
  constructor(public translate: TranslateService, public dialog: MatDialog) {}
  public projectsArray: Project[] = [];

  ngOnInit(): void {
    // For memory purposes I stored the projects directly in the translation files
    this.translate.stream('projects.projectsList').subscribe((value) => {
      this.projectsArray = value;
    });
  }

  openDialog(project: Project) {
    if (window.innerWidth < 1024) return;
    this.dialog.open(DialogViewProjectComponent, {
      data: project,
    });
  }
}
