import React from 'react'
import User from '../fragments/user'
import Navigation from './../fragments/Navigation'
import Data from './../../data';
function Left() {
    let user = Data.user
    return (
        <nav>
            <User nom={user.name} rol={user.role}></User>
            <Navigation></Navigation>
        </nav>
    )
}

export default Left
