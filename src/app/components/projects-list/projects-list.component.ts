import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../interfaces/project';
import { ProjectComponent } from '../utilities/project/project.component';
import { TranslateService, TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-projects-list',
  imports: [CommonModule, ProjectComponent, TranslatePipe],
  templateUrl: './projects-list.component.html',
  styleUrl: './projects-list.component.scss',
})
export class ProjectsListComponent implements OnInit {
  constructor(public translate: TranslateService) {}
  public projectsArray: Project[] = [];

  ngOnInit(): void {
    // For memory purposes I stored the projects directly in the translation files
    this.translate.stream('projects.projectsList').subscribe((value) => {
      this.projectsArray = value;
    });
  }
}
