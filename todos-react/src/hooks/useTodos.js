import { useQuery , useMutation, useQueryClient } from  '@tanstack/react-query';
import todoService from '../services/todoService';
export const useTodos = () => {
    return useQuery({
        queryKey: ['todos'],
        queryFn: () => todoService.getAllTodos()
    });
};

export const useAddTodo = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (text) => todoService.addTodo(text),
        onSuccess: () => {
            queryClient.invalidateQueries( {queryKey:['todos']});
        },
    });
};

export const useUpdateTodo = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ id, updates}) => todoService.updateTodo(id,updates),
        onSuccess: () => {
            queryClient.invalidateQueries( {queryKey:['todos']});
        },
    });
};

export const useDeleteTodo = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ id,}) => todoService.deleteTodo(id),
        onSuccess: () => {
            queryClient.invalidateQueries( {queryKey:['todos']});
        },
    });
};