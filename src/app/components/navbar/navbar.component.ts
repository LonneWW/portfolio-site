import { Component } from '@angular/core';
import { OptionsComponent } from '../utilities/options/options.component';
@Component({
  selector: 'app-navbar',
  imports: [OptionsComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {}
