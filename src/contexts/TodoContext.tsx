import React, { createContext, useEffect, useState } from 'react';
import { Todo } from '../models/Todo';
import { get, save } from '../services/TodoService';
import { TodoContextType } from './TodoContextType';

export const TodoContext = createContext<TodoContextType>({
    todos: [],
    addTodo: () => { },
    removeTodo: () => { },
    toggle: () => { },
});

const TodoProvider = (props: any) => { 
    // Importar a lista de Todos cadastrados com o método Get cadastrado nos services
    // setTodos é um método para notificar os componentes que foram alterados.
    const [todos, setTodos] = useState<Todo[]>(get);

    // Este Hook realiza uma ação toda vez que ele escuta uma alteração na variável, nesse caso, será um array e o save é a função que ele aplica ao escutar 
    useEffect(() => {
        save(todos);
    }, [todos]);

    const addTodo = (title: string) => {
        // a variável title recebe o valor da função
       const todo: Todo = {id: todos.length +1, title: title, done: false}
       // utilização do spreadoperator
       setTodos([...todos, todo]);
       
    };
    const removeTodo = (todo: Todo) => {
        // O setTodos passa um filter com o i = índice, filtar tudo que é diferente do meu índice, retorna tudo, menos o índice removido.
        const index = todos.indexOf(todo);
        setTodos(todos.filter((_, i) => i !== index))
        console.log('Removeu' + todo.title);
        
    };
    const toggle = (todo: Todo) => {
        // Acha o índice do Todo
        const index = todos.indexOf(todo);
        // Verifica se o Todo encontrado é diferente de done
        todos[index].done = !todo.done;
        // Amostra os Todos
        setTodos([...todos]);
        console.log('Completou' + todo.title);
        
    };
    
    return(
        // O Value espera as funções, como um objeto (entre chaves) - tudo que for para o Value, fica exposto para que os childrens consumam
        <TodoContext.Provider value={{todos, addTodo, removeTodo, toggle}}>
            {props.children}
        </TodoContext.Provider>
    )
}

export default TodoProvider