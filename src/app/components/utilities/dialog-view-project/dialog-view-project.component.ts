import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Project } from '../../../interfaces/project';
@Component({
  selector: 'app-dialog-view-project',
  imports: [
    CommonModule,
    MatDialogModule,
    MatChipsModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './dialog-view-project.component.html',
  styleUrl: './dialog-view-project.component.scss',
})
export class DialogViewProjectComponent {
  data: Project = inject(MAT_DIALOG_DATA);
}
