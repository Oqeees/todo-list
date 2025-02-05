import React from "react";
import ReactDOM from 'react-dom/client';

import { TodoList } from "./component/TodoList";
import { SearchPanel } from "./component/SearchPanel";
import { AppHeader } from "./component/AppHeader";

const App = () => {

    const value = '<script>alert ("")</script>';

    return (
        <div>
            {/*{ isLoggedIn ? null : loginBox }*/}
            { value }
            < AppHeader />
            <SearchPanel />
            <TodoList/>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>);