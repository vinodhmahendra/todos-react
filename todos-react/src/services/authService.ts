import { AuthResult } from '../types/index.ts';
class AuthService {
    authenticate (username:string, password: string):  AuthResult {
        // HArdcoded validation
        if ( username === 'vinodh' && password === 'password123') {
            localStorage.setItem('user',username);
            return { success: true, message: "Login successfull"};
        }
        return { success: false, message: 'Invalid credentials'}
    }

    isAuthenticated() {
        return localStorage.getItem('user') !== null;
    }

    getCurrentUser() {
        return localStorage.getItem('user');
    }

    logout() {
        localStorage.removeItem('user');
    }
}

export default new AuthService();
// const authService = new AuthService();
// export default authService;