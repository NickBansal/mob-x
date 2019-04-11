import React from 'react'
import { Button } from '../Themes'

const handleClick = (store) => {
    store.clearList()
}

const Controls = ({ store }) => {
    return (
        <React.Fragment>
            <Button onClick={() => handleClick(store)}>clear table</Button>
            <Button>add record</Button>
        </React.Fragment>
    );
}

export default Controls