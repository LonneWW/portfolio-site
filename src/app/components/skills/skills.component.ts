import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { IconsService, IconMeta } from '../../services/icons.service';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-skills',
  imports: [CommonModule, MatIconModule, TranslatePipe],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent implements OnInit {
  usedTechIcons: IconMeta[] = [];
  expTechIcons: IconMeta[] = [];
  constructor(private iconsService: IconsService) {}

  ngOnInit() {
    //on init, populates the icons arrays using the iconsService
    this.usedTechIcons = this.iconsService.getAllUsed() as IconMeta[];
    this.expTechIcons = this.iconsService.getAllExp() as IconMeta[];
  }
}
