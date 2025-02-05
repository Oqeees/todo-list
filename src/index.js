import React from "react";
import ReactDOM from 'react-dom/client';
import TodoList from "./component/TodoList";
import SearchPanel from "./component/SearchPanel";
import AppHeader from "./component/AppHeader";
import ItemStatusFilter from "./component/ItemStatusFilter";

const App = () => {
    const todoData = [
        { label: 'Drink Coffee', important: false, id: 1 },
        { label: 'Implement React Application', important: true, id: 2 },
        { label: 'Make notes from your study', important: false, id: 3 },
        { label: 'Do not drink alcohol', important: false, id: 4 },
    ];

    return (
        <div>
            <AppHeader />
            <SearchPanel />
            <TodoList todos={todoData} />
            <ItemStatusFilter />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
