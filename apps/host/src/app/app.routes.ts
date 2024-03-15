import { loadRemoteModule } from '@angular-architects/native-federation';
import { Route } from '@angular/router';
import { TestComponent } from '../components/test/test.component';

export const appRoutes: Route[] = [
  {
    path: 'test',
    component: TestComponent
    // loadComponent: () => import('../components/test/test.component').then(c => c.TestComponent)
  },
  {
    path: 'remote',
    loadComponent: () =>
      loadRemoteModule('remote', './Component').then((m) => m.AppComponent),
  },
];
