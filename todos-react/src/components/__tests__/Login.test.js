import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Login from '../../Login';


const LoginWrapper = () => (
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
  
  test('renders login form', () => {
    render(<LoginWrapper />);
    expect(screen.getByPlaceholderText('Username')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Login' })).toBeInTheDocument();
  });
  
  test('shows error for invalid credentials', () => {
    render(<LoginWrapper />);
    
    fireEvent.change(screen.getByPlaceholderText('Username'), {
      target: { value: 'invalid' }
    });
    fireEvent.change(screen.getByPlaceholderText('Password'), {
      target: { value: 'invalid' }
    });
    fireEvent.click(screen.getByRole('button', { name: 'Login' }));
    
    expect(screen.getByText('Invalid credentials')).toBeInTheDocument();
  });