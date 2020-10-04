import React, { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import { TodoContextType } from '../contexts/TodoContextType';
import TodoListItem from './TodolistItem';

const Todolist = () => {
    //{ todos } é um método de descontrução, ele retorna tudo que está dentro deste contexto.
    const { todos } = useContext<TodoContextType>(TodoContext);
    return (
        <table className="uk-table">
            <caption> Lista de Tarefas</caption>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Tarefa</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos?.map(
                            todo => (<TodoListItem key={todo.id} todo={todo} />)
                        )
                    }
                </tbody>
            
        </table>
    )
}

export default Todolist;