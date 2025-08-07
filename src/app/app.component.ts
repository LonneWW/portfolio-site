import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import {
  siHtml5,
  siSass,
  siCss,
  siJavascript,
  siTypescript,
  siAngular,
  siNodedotjs,
  siMysql,
  siGithub,
  siBootstrap,
  siPhp,
  siFirebase,
  siNetlify,
  siRender,
  siRailway,
} from 'simple-icons';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsListComponent } from './components/projects-list/projects-list.component';
import { ObjectivesComponent } from './components/objectives/objectives.component';
import { PageFooterComponent } from './components/page-footer/page-footer.component';
import { IconsService } from './services/icons.service';

@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsListComponent,
    ObjectivesComponent,
    PageFooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Samuel Barbieri';
  constructor(
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    iconsService: IconsService
  ) {
    const expTechIcons: any[] = [
      siHtml5,
      siSass,
      siCss,
      siJavascript,
      siTypescript,
      siAngular,
      siNodedotjs,
      siMysql,
      siGithub,
    ];
    const usedTechIcons: any[] = [
      siBootstrap,
      siPhp,
      siFirebase,
      siNetlify,
      siRender,
      siRailway,
    ];
    iconRegistry.addSvgIcon(
      'linkedin',
      sanitizer.bypassSecurityTrustResourceUrl('assets/linkedin.svg')
    );
    iconRegistry.addSvgIcon(
      'github',
      sanitizer.bypassSecurityTrustResourceUrl('assets/github.svg')
    );
    expTechIcons.forEach((icon) => {
      iconRegistry.addSvgIconLiteral(
        icon.slug,
        sanitizer.bypassSecurityTrustHtml(icon.svg)
      );

      iconsService.registerIcon(true, icon);
    });

    usedTechIcons.forEach((icon) => {
      iconRegistry.addSvgIconLiteral(
        icon.slug,
        sanitizer.bypassSecurityTrustHtml(icon.svg)
      );

      iconsService.registerIcon(false, icon);
    });
  }
}
