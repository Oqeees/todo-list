import React from "react";
import ReactDOM from 'react-dom/client';

import AppHeader from './component/AppHeader';
import SearchPanel from './component/SearchPanel';
import TodoList from './component/TodoList';
import ItemStatusFilter from './component/ItemStatusFilter';

import './index.css';

const App = () => {
    const todoData = [
        { label: 'Drink Coffee', important: false, id: 1 },
        { label: 'Build React App', important: true, id: 2 },
        { label: 'Write notes', important: false, id: 3 },
        { label: 'Workout', important: false, id: 4 },
    ];

    return (
        <div className="todo-app">
            <AppHeader toDo={1} done={3} />
            <div className="top-panel d-flex">
                <SearchPanel />
                <ItemStatusFilter />
            </div>
            <TodoList todos={todoData} />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
