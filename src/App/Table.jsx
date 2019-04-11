import React from 'react'
import { FullTable, TD } from '../Themes'
import Row from './Row'

const Table = ({ store }) => {
    return (
        <FullTable>
            <thead>
                <tr>
                    <TD>Name:</TD>
                    <TD>Daily salary:</TD>
                </tr>
            </thead>
            <tbody>
                {store.map((element, index) => (
                    <Row
                        key={index}
                        {...element}
                    />
                ))}
            </tbody>
        </FullTable >
    );
}

export default Table