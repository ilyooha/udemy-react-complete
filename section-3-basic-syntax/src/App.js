import React, {useState} from 'react';
import './App.css';
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

function App() {
    const initialState = {
        username: 'username_initial'
    };

    const [state, setState] = useState(initialState);

    const usernameOnChangeHandler = (e) => {
        setState({
            ...state,
            username: e.target.value
        })
    };

    return (
        <div className="App">
            <UserInput username={state.username} usernameOnChange={usernameOnChangeHandler}/>
            <UserOutput username={state.username}/>
        </div>
    );
}

export default App;
