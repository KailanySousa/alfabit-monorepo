import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

type Variant = 'primary' | 'secondary' | 'tertiary';

@Component({
  selector: 'ab-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() text = '';
  @Input() variant: Variant = 'primary';
  @Input() disabled = false;

  getClasses(): string {
    return this.variant;
  }
}
