import { Component, OnInit } from '@angular/core';
import { SwitchThemeService } from './switch-theme.service';

@Component({
  selector: 'app-switch-theme',
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor01"
        aria-controls="navbarColor01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarColor01">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#"
              >Home <span class="sr-only">(current)</span></a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
        </ul>
      </div>
    </nav>

    <div class="container mt-4">
      <div class="form-group mb-4">
        <select
          [(ngModel)]="service.selectedTheme"
          (ngModelChange)="service.loadTheme()"
          class="form-control"
          id="theme"
        >
          <option [ngValue]="'materia'">Materia</option>
          <option [ngValue]="'journal'">Journal</option>
          <option [ngValue]="'lux'">Lux</option>
        </select>
      </div>

      <button type="button" class="btn btn-primary">Primary</button>
      <button type="button" class="btn btn-secondary">Secondary</button>
      <button type="button" class="btn btn-success">Success</button>
      <button type="button" class="btn btn-info">Info</button>
      <button type="button" class="btn btn-warning">Warning</button>
      <button type="button" class="btn btn-danger">Danger</button>
      <button type="button" class="btn btn-link">Link</button>
    </div>
  `,
})
export class SwitchThemeComponent {
  constructor(public service: SwitchThemeService) {}
}
