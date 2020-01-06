import React from 'react';
import { render} from 'react-dom';
import LanguageTranslator from '../../src';
const App = () => (
    <LanguageTranslator 
        onDone={(data)=>{console.log(data)}}
    />
);
render(<App />, document.getElementById("root"));