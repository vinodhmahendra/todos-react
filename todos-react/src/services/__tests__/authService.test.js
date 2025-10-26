import { Session } from "inspector";
import authService from "../authService";
// import test from "node:test";

describe('AuthService', () => {
    beforeEach( () => {
        sessionStorage.clear();
    });

    test('authenticates valid user', ()=> {
        const result = authService.authenticate('vinodh','password123');
        expect(result.success).toBe(true);
        expect(sessionStorage.getItem('user')).toBe('vinodh');
    });

    test('rejects invalid user', ()=> {
        const result = authService.authenticate('invalid','invalid');
        expect(result.success).toBe(false);
        expect(sessionStorage.getItem('user')).toBeNull();
    });

    test('check authentication status', () => {
        expect ( authService.isAuthenticated()).toBe(false);
        sessionStorage.setItem('user','vinodh');
        expect ( authService.isAuthenticated()).toBe(true);
    });

    test ('logs out user', () => {
        sessionStorage.setItem('user','vinodh');
        authService.logout();
        expect( sessionStorage.getItem('user')).toBeNull();
    });
});