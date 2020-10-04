import React, { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import { TodoContextType } from '../contexts/TodoContextType';
import { Todo } from '../models/Todo';

interface TodoListItemProps {
    todo: Todo
}

const TodoListItem = (props: TodoListItemProps) => {
    // importação de métodos direto do contexto
    const {removeTodo, toggle} = useContext<TodoContextType>(TodoContext);

    const onRemove = (todo: Todo) => {
       // Uso da função vindo do context
        removeTodo(todo);
               
    }
    
    const handleChange = (event: any) => {
        // Uso da função vindo do context
        toggle(props.todo);
    }
    return(
        <tr className="uk-animation-slide-bottom-medium">
            <td className="uk-width-auto">
                <label> 
                    <input type="checkbox" className="uk-checkbox" checked={props.todo.done} onChange={handleChange} />
                </label>
            </td>
            <td className="uk-width-expand">{props.todo.title}</td>
            <td className="uk-width-auto">
                <button className="uk-icon-button uk-button-danger" uk-icon="trash" onClick={() => onRemove(props.todo)}></button>
            </td>
        </tr>
    )
}

export default TodoListItem;