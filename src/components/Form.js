import React from 'react';

const Form = props => {
    return (
        <form>
            <button>Currently In </button>
            <input value={props.value} placeholder="Wpisz miasto" />
            <button>, It's</button>
        </form>
    )
}

export default Form