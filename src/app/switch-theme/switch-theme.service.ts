import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SwitchThemeService {
  selectedTheme = 'materia';
  insertedElement: HTMLElement;

  constructor() {
    this.loadTheme();
  }

  loadTheme() {
    import(
      /* webpackChunkName: "[request]" */
      `../../assets/styles/${this.selectedTheme}.js`
    )
      .then((s) => s.default)
      .then(this.insertToDom);
  }

  insertToDom = (content: string) => {
    const element = document.createElement('style');
    element.textContent = content;
    document.head.appendChild(element);

    setTimeout(() => {
      if (this.insertedElement) this.insertedElement.remove();
      this.insertedElement = element;
    }, 0);
  };
}
