import React from 'react'
import { FullTable, TD } from '../Themes'
import Row from './Row'
import { observer } from "mobx-react"

class Table extends React.Component {
    render() {
        return (
            <FullTable>
                <thead>
                    <tr>
                        <TD>Name:</TD>
                        <TD>Daily salary:</TD>
                    </tr>
                </thead>
                <tbody>
                    {this.props.store.employeesList.map((element, index) => (
                        <Row
                            key={index}
                            {...element}
                        />
                    ))}
                </tbody>
            </FullTable >
        );
    }
}


export default observer(Table)