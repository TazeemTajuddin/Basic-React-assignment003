import React from 'react';

import './App.css';
import './Hello.css'

function Hello({firstname}) {
    return <p className="myname">This is Student:{firstname}</p>
}
export default Hello