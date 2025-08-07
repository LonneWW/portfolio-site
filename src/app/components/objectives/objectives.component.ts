import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-objectives',
  imports: [CommonModule, MatIconModule],
  templateUrl: './objectives.component.html',
  styleUrl: './objectives.component.scss',
})
export class ObjectivesComponent {
  objectivesToDo: objective[] = [
    {
      label: 'Other S2I Courses',
      url: 'https://www.start2impact.it',
    },
    {
      label: 'Coursera Algorithms Courses',
      url: 'https://www.coursera.org/learn/algorithms-part1',
    },
    {
      label: 'John Papa: Angular Patterns and Best Practices',
      url: 'https://www.youtube.com/watch?v=-g2Dat7z2WQ',
    },
    {
      label: 'John Papa: Angular Tips',
      url: 'https://www.youtube.com/watch?v=2ZFgcTOcnUg',
    },
    {
      label: 'CS50x Lectures',
      url: 'https://www.youtube.com/playlist?list=PLhQjrBD2T383q7Vn8QnTsVgSvyLpsqL_R',
    },
    {
      label: 'MIT Introduction to Algorithms',
      url: 'https://www.youtube.com/playlist?list=PLUl4u3cNGP62UTc77mJoubhDELSC8lfR0',
    },
    {
      label: 'Data Structures',
      url: 'https://www.youtube.com/playlist?list=PLDV1Zeh2NRsB6SWUrDFW2RmDotAfPbeHu',
    },
    {
      label: 'Design Patterns: Elements of Reusable Object-Oriented Software',
      url: 'https://en.wikipedia.org/wiki/Design_Patterns',
    },
  ];

  objectivesDone: objective[] = [];
}

interface objective {
  label: string;
  url?: string;
}
