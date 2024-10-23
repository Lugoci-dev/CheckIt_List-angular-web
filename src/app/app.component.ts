import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppSidebarComponent } from "./core/sidebar/app-sidebar.component";
import { AppBodyComponent } from './core/body/app-body.component';
import { AppNavbarComponent } from './core/navbar/app-navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AppSidebarComponent,
    AppBodyComponent,
    AppNavbarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CheckIt_ng18';
}
