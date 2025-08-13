import { Component } from '@angular/core';
import { OptionsComponent } from '../utilities/options/options.component';
import { TranslatePipe } from '@ngx-translate/core';
@Component({
  selector: 'app-navbar',
  imports: [OptionsComponent, TranslatePipe],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {}
