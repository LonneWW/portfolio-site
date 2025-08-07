import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-options',
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './options.component.html',
  styleUrl: './options.component.scss',
})
export class OptionsComponent {
  changeTheme() {
    const html = document.querySelector('html');
    const currentTheme = html?.style.colorScheme;
    const newTheme = currentTheme == 'dark' ? 'light' : 'dark';
    html!.style.colorScheme = newTheme;
    if (newTheme == 'dark') {
      html!.classList.add('dark');
    } else {
      html!.classList.remove('dark');
    }
    //TUTTO MOLTO PROVVISORIO!
  }
}
