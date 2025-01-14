import { Routes } from '@angular/router';
import { AuthRoutesConstant } from '@constants/auth/routes.constant';
import { TaskRoutesConstant } from '@constants/task/routes.constant';

export const routes: Routes = [
    {
        path: AuthRoutesConstant.root.relativePath,
        pathMatch: 'prefix',
        loadChildren: () => import("./auth/pages/auth.routes").then((m) => m.AuthRoutes),
    },
    {
        path: TaskRoutesConstant.root.relativePath,
        pathMatch: 'prefix',
        loadChildren: () => import("./task/pages/task.routes").then((m) => m.TaskRoutes),
    },
    {
        path: '**',
        redirectTo: AuthRoutesConstant.root.relativePath,
    }
];
