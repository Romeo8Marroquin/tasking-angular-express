import { AuthRoutesInterface } from "@interfaces/auth/routes.interface";

export const AuthRoutesConstant: AuthRoutesInterface = {
    root: {
        relativePath: 'auth',
        completePath: '/auth',
    },
    login: {
        relativePath: 'login',
        completePath: '/auth/login'
    },
};