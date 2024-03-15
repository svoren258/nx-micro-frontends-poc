import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeRemoteComponent } from './nx-welcome-remote.component';

@Component({
  standalone: true,
  imports: [NxWelcomeRemoteComponent, RouterModule],
  selector: 'nx-micro-frontends-poc-root-remote',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'remote';
}
