import { Routes } from '@angular/router';

export const TaskRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import('./home/home.component').then(m => m.HomeComponent),
    },
    {
        path: '**',
        redirectTo: '',
    }
];
