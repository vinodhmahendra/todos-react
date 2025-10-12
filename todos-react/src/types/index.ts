export interface Todo {
    id: number;
    text:string;
    completed: boolean;
}

export interface User  {
    username: string;
}

export interface AuthResult {
    success: boolean;
    message: string;
}