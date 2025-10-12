class AuthService {
    authenticate (username, password) {
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