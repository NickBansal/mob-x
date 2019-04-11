import React from "react";
import { TD } from '../Themes'

const Row = ({ name, salary }) => {
    return (
        <tr>
            <TD>{name}</TD>
            <TD>£{salary}</TD>
        </tr>
    );
};

export default Row