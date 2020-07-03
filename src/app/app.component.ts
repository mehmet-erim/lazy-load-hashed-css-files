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
    this.loadTheme();
  }

  loadTheme() {
    import(
      /* webpackChunkName: "[request]" */ `../assets/styles/${this.selectedTheme}.js`
    )
      .then((s) => s.default)
      .then(this.insertToDom);
  }

  insertToDom = (content: string) => {
    const element = document.createElement('style');
    element.textContent = content;
    document.head.appendChild(element);

    if (this.insertedElement) this.insertedElement.remove();
    this.insertedElement = element;
  };
}
