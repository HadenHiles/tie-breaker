import { Component } from "@angular/core";
import template from "./app.component.html";
import style from "./app.component.scss";
import theme from "./app.theme.scss";

@Component({
  selector: "app",
  template,
  styles: [ style, theme ]
})
export class AppComponent {
  constructor() {
  }
}
