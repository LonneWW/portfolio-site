import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-options',
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './options.component.html',
  styleUrl: './options.component.scss',
})
export class OptionsComponent implements OnInit {
  constructor(public translate: TranslateService) {}
  public theme: string = 'light_mode';
  changeTheme() {
    const html = document.querySelector('html');
    const currentTheme = html?.style.colorScheme;
    const newTheme = currentTheme == 'dark' ? 'light' : 'dark';
    html!.style.colorScheme = newTheme;
    if (newTheme == 'dark') {
      html!.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      html!.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
    //TUTTO MOLTO PROVVISORIO!
    this.theme = (newTheme == 'dark' ? 'light' : 'dark') + '_mode';
  }

  changeLang() {
    const currentLang: string = this.translate.getCurrentLang();
    const newLang: string = currentLang == 'it' ? 'en' : 'it';
    this.translate.use(newLang);
    localStorage.setItem('lang', newLang);
  }

  ngOnInit(): void {
    const storageTheme = localStorage.getItem('theme');
    if ((storageTheme && storageTheme == 'dark') || storageTheme == 'light') {
      this.theme = (storageTheme == 'dark' ? 'light' : 'dark') + '_mode';
    }
  }
}
