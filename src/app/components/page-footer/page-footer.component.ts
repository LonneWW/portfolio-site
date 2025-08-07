import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-page-footer',
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './page-footer.component.html',
  styleUrl: './page-footer.component.scss',
})
export class PageFooterComponent {}
