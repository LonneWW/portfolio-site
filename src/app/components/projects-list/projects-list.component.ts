import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../interfaces/project';
import { ProjectComponent } from '../utilities/project/project.component';

@Component({
  selector: 'app-projects-list',
  imports: [CommonModule, ProjectComponent],
  templateUrl: './projects-list.component.html',
  styleUrl: './projects-list.component.scss',
})
export class ProjectsListComponent {
  public projectsArray: Project[] = [
    {
      title: 'Tech News',
      imageUrl: 'assets/tech-news-preview.png',
      description:
        "This project is the pratical exam of the Javascript Advanced start2impact University's course. The task was to create a web application to democratize the spread of information in the tech field through the use of the Hacker News API service.",
      techChipList: [
        { text: 'html' },
        { text: 'css' },
        { text: 'sass' },
        { text: 'javascript' },
        { text: 'webpack' },
        { text: 'dotenv' },
        { text: 'netlify' },
      ],
      sourcesList: [
        { text: 'Website', link: 'https://lonneww-technews.netlify.app/' },
        { text: 'Source Code', link: 'https://github.com/LonneWW/technews/' },
      ],
    },
    {
      title: 'Our Urbs',
      imageUrl: 'assets/our-urbs-preview.png',
      description:
        "This project is one of the the pratical exams of the Angular start2impact University's course. The task was to create a fake app using the Go REST API service. Mine is a social-like app, for people who wants to share ideas and reports to improve life in urban centers.",
      techChipList: [
        { text: 'html' },
        { text: 'scss' },
        { text: 'typescript' },
        { text: 'angular' },
        { text: 'angular material' },
        { text: 'netlify' },
      ],
      sourcesList: [
        { text: 'Website', link: 'https://our-urbs.netlify.app/' },
        { text: 'Source Code', link: 'https://github.com/LonneWW/our-urbs/' },
      ],
    },
    {
      title: 'Your Space',
      imageUrl: 'assets/your-space-preview.png',
      description:
        'This is the final project for the master in full stack development at start2impact University. The delivery was to develop a mockup web app for a hypothetical client company. I chose to develop a platform for writing and sharing notes for a company that offers psychotherapy.',
      techChipList: [
        { text: 'angular' },
        { text: 'angular material' },
        { text: 'quill' },
        { text: 'netlify' },
        { text: 'render' },
        { text: 'railway' },
      ],
      sourcesList: [
        { text: 'Website', link: 'https://your-space-fe.onrender.com/' },
        { text: 'Source Code', link: 'https://github.com/LonneWW/your-space' },
      ],
    },
  ];
}
