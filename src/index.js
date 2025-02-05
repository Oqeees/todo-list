import React from "react";
import ReactDOM from 'react-dom/client';
import { TodoList } from "./component/TodoList";
import { SearchPanel } from "./component/SearchPanel";
import { AppHeader } from "./component/AppHeader";

const App = () => {

    const todoData = [
        { label: 'Drink Coffee', important: false },
        { label: 'Implement React Application', important: true },
        { label: 'Make notes from your stud', important: false },
        { label: 'Do not drink alchohol', important: false },
    ];
    return (
        <div>
            <AppHeader />
            <SearchPanel />
            <TodoList todos =  {todoData} />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>);