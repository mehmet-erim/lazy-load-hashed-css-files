import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  selectedTheme = 'materia';
  insertedElement: HTMLElement;

  ngOnInit() {
    this.switchTheme();
  }

  switchTheme() {
    let style;

    switch (this.selectedTheme) {
      case 'materia':
        style = import(
          /* webpackChunkName: "materia" */ '../assets/styles/materia.js'
        ).then((s) => s.default);
        break;
      case 'journal':
        style = import(
          /* webpackChunkName: "journal" */ '../assets/styles/journal.js'
        ).then((s) => s.default);
        break;
      case 'lux':
        style = import(
          /* webpackChunkName: "lux" */ '../assets/styles/lux.js'
        ).then((s) => s.default);
        break;
    }

    style.then((content) => this.insertToDom(content));
  }

  insertToDom(content: string) {
    if (this.insertedElement) {
      this.insertedElement.remove();
    }

    const element = document.createElement('style');
    element.textContent = content;
    document.head.appendChild(element);
    this.insertedElement = element;
  }
}
