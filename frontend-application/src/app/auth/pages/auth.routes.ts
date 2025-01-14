import { Routes } from '@angular/router';
import { AuthRoutesConstant } from '@constants/auth/routes.constant';

export const AuthRoutes: Routes = [
    {
        path: AuthRoutesConstant.login.relativePath,
        loadComponent: () => import('./login/login.component').then(m => m.LoginComponent),
    },
    {
        path: '**',
        redirectTo: AuthRoutesConstant.login.relativePath,
    }
];
