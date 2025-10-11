class AuthService {
    authenticate (username, password) {
        // HArdcoded validation
        if ( username === 'vinodh' && password === 'password123') {
            return { success: true, message: "Login successfull"};
        }
        return { success: false, message: 'Invalid credentials'}
    }
}

export default new AuthService();