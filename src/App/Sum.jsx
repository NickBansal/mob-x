import React from 'react'
import { observer } from "mobx-react"

const Sum = ({ store }) => (
    <p>Sum: £{store.totalPay}</p>
)

export default observer(Sum)