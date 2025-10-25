import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Login from './Login';
import test from 'node:test';


const LoginWrapper = () => {
    <BrowserRouter>
        <Login />
    </BrowserRouter>
}


test('renders login form', () => {
    render(<LoginWrapper />);
    expect(screen.getByPlaceholderText('Username')).toBbeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBbeInTheDocument();
    expect(screen.getByRole('button', { name: 'Login'})).toBbeInTheDocument();
})

test('shows error for invalid credentials', () => {
    render(<LoginWrapper />);

    fireEvent.change(screen.getByPlaceholderText('Username'), {
        target: { value: 'invaid' }
    });

    fireEvent.change(screen.getByPlaceholderText('Password'), {
        target: { value: 'invaid' }
    });

    fireEvent.click(screen.getByRole('button', { name: 'Login' }));

    expect(screen.getByText('Invalid credentials')).toBbeInTheDocument();
});