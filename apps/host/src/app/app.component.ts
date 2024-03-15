import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeHostComponent } from './nx-welcome-host.component';

@Component({
  standalone: true,
  imports: [NxWelcomeHostComponent, RouterModule],
  selector: 'nx-micro-frontends-poc-root-host',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'host';
}
