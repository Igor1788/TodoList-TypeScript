import React, { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { TodoContextType } from '../contexts/TodoContextType';

const schema = yup.object().shape({
    title: yup.string().required('Tarefa inválida'),
});

interface AddTodoForm {
    title: string
}



const AddTodo = () => {
    const { addTodo } = useContext<TodoContextType>(TodoContext);
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data: AddTodoForm, e: any) => {
        addTodo(data.title);
        // faz resetar o evento como um todo
        e.target.reset();
        // redirect para a página inicial
        window.location.href ='/';
    }
    return(
        <form onSubmit={handleSubmit<AddTodoForm>(onSubmit)}>
            <h4>Nova Tarefa</h4>
            <div className="uk-margin uk-width-1-1">
                <input type="text" name="title" id="title" placeholder="Nova Tarefa" className="uk-input" ref={register} />
                {/* Validação de erro com if inline */}
                <span><small><strong className="ul-text-danger">{errors.title?.message}</strong></small></span>        
            </div>
            <div className="uk-width-1-1">
                <button type="submit" className="uk-button uk-button-primary">Salvar</button>
            </div>
        </form>
    );
}

export default AddTodo;