import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { DemoAngularMaterialModule } from './DemoAngularMaterialModule';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterLink,
    DemoAngularMaterialModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('ECommerceWeb');
}
