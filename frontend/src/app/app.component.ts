import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <h1>PocketFin</h1>
    <p>Карманный финансовый помощник. Статус API: {{ apiStatus() }}</p>
    <router-outlet />
  `,
})
export class AppComponent {
  protected readonly apiStatus = signal('проверка…');
}
