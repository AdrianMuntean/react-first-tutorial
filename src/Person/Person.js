// prefered way of creating components
// functional component
import React from 'react';
import './Person.css'

const person = (props) => {
    const name = props.name ? props.age : "Default";
    return (
     <div className="Person">
        <p onClick={props.click}>I'm a person and I am {props.age} years old and my name is {props.name}</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name}/>
    </div>
    );
}

export default person; 