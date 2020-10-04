import React from 'react';
import TodoContext from '../contexts/TodoContext';
import Navbar from './NavBar';
import Todolist from './Todolist';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import AddTodo from './AddTodo';

const App = () => {
    return(
        <TodoContext>
            <Router>
                <Navbar />
                <br />
                <div className="uk-container">
                    <Switch>
                        <Route path="/create">
                            <AddTodo />
                        </Route>
                        <Route path="/">
                            <h4>Minha lista de tarefas</h4>
                            <Todolist />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </TodoContext>
    )
}

export default App;