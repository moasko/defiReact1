import React from 'react'
import Data from '../../data.js'
import { UsersBox } from './../fragments/usersBox';
import RightHeader from './../fragments/rightHeader';
function Right() {
    let menbers = Data.members
    return (
        <div className="right">
            <div className="usersBoxContent">
                <RightHeader />
                {menbers.map(e => {
                    return <UsersBox name={e.name} rol={e.country} description={e.description} />
                })}
            </div>
        </div>
    )
}

export default Right
