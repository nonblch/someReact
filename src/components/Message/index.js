import React from 'react';




export const ListGroupItem = (props) => {

    const fewWords = props.words;

    const classes = [
        'textDec',
        (props.active ? 'active' : ''),
        (props.disabled ? 'disabled' : '')
    ].join(' ');


    return <li className={classes}>
        {fewWords}
    </li>
};

//не создаётся pull