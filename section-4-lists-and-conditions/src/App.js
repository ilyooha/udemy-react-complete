import React, {useState} from 'react';
import './App.css';
import Char from "./Char/Char";
import Validation from "./Validation/Validation";

const App = () => {
    const initialState = {
        letters: []
    };
    const [state, setState] = useState(initialState);

    const inputOnChangeHandler = e => {
        const text = e.target.value;
        const letters = [];
        for (let i = 0; i < text.length; i++) {
            letters.push(text.charAt(i));
        }

        setState({
            ...state,
            letters: letters
        })
    };

    const charRemovedHandler = charIndex => {
        const letters = [...state.letters];
        letters.splice(charIndex, 1);

        setState({
            ...state,
            letters: letters
        });
    }

    const lettersToString = letters => letters.reduce((acc, current) => acc + current, []);

    return (
        <div className="App">
            <input type="text" value={lettersToString(state.letters)} onChange={inputOnChangeHandler}/>
            <p>Length: {state.letters.length}</p>
            <Validation text={lettersToString(state.letters)}/>
            <p>
                {state.letters.map((letter, index) => {
                    return (
                        <Char key={index} letter={letter} index={index}
                              charRemovedHandler={charRemovedHandler}/>
                    )
                })}
            </p>
        </div>
    );
}

export default App;
