import { Component, Input } from "@angular/core";
import { Size } from "./typography.component";

@Component({
  standalone: true,
  styleUrls: ['./typography.component.css'],
  template: `<h1 class="typography {{ size }}"><ng-content></ng-content></h1>`,
})
export class H1Component {
  @Input() size!: Size;
}

@Component({
  standalone: true,
  styleUrls: ['./typography.component.css'],
  template: `<h2 class="typography {{ size }}"><ng-content></ng-content></h2>`,
})
export class H2Component {
  @Input() size!: Size;
}

@Component({
  standalone: true,
  styleUrls: ['./typography.component.css'],
  template: `<h3 class="typography {{ size }}"><ng-content></ng-content></h3>`,
})
export class H3Component {
  @Input() size!: Size;
}

@Component({
  standalone: true,
  styleUrls: ['./typography.component.css'],
  template: `<h4 class="typography {{ size }}"><ng-content></ng-content></h4>`,
})
export class H4Component {
  @Input() size!: Size;
}

@Component({
  standalone: true,
  styleUrls: ['./typography.component.css'],
  template: `<h5 class="typography {{ size }}"><ng-content></ng-content></h5>`,
})
export class H5Component {
  @Input() size!: Size;
}

@Component({
  standalone: true,
  styleUrl: './typography.component.css',
  template: ` <span class="typography {{ size }}"> Texto span </span> `,
})
export class SpanComponent {
  @Input() size!: Size;
}
