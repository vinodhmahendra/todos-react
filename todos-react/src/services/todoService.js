class TodoService {
    constructor() {
      this.todos = [
        { id: 1, text: 'Learn React', completed: false },
        { id: 2, text: 'Build Todo App', completed: true },
        { id: 3, text: 'Deploy to Production', completed: false }
      ];
      this.nextId = 4;
    }
  
    getAllTodos() {
      return this.todos;
    }
  
    addTodo(text) {
      const newTodo = { id: this.nextId++, text, completed: false };
      this.todos.push(newTodo);
      return newTodo;
    }
  
    updateTodo(id, updates) {
      const index = this.todos.findIndex(todo => todo.id === id);
      if (index !== -1) {
        this.todos[index] = { ...this.todos[index], ...updates };
        return this.todos[index];
      }
      return null;
    }
  
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id);
    }
  
    getFilteredTodos(filter) {
      switch (filter) {
        case 'completed':
          return this.todos.filter(todo => todo.completed);
        case 'active':
          return this.todos.filter(todo => !todo.completed);
        default:
          return this.todos;
      }
    }
  }

  export default new TodoService();