import React from 'react';

import './App.css';
import Hello from './Hello';

function App(props) {
  return <div>
          Hello <strong>{props.name}</strong>
<Hello firstname={props.name}></Hello>
          <h1>Short Introduction</h1>
          <ol>
            <li>
I'm completed my bachloer in Bs-ERP in 2017
            </li>
            <li>
              I'm Volunteery working with three diffrent NGO's
            </li>
          </ol>
          </div>
}

export default App;
